import { NextResponse } from "next/server"

/**
 * GET /download/android
 *
 * Redirects to the latest successful Android build artifact from EAS.
 * This gives us a stable URL (kahade.id/download/android) that always
 * serves the newest APK without manual link updates.
 *
 * Requires EXPO_TOKEN env var (Expo access token with build:read scope).
 * Falls back to a manually-set APK URL if the API call fails.
 */

const PROJECT_ID = "c3931e6f-c945-44d3-8ae8-1665c54fdf94"

// Manual fallback — update this when cutting a new build if the API is down.
const FALLBACK_APK_URL =
  "https://expo.dev/artifacts/eas/PGzgCS2TSfb1L2PIxd6873YXisaUcebILBVd0NwN5Hc.apk"

interface EasBuildNode {
  id: string
  status: string
  artifacts: { applicationArchiveUrl: string | null }
}

async function getLatestApkUrl(): Promise<string | null> {
  const token = process.env.EXPO_TOKEN
  if (!token) return null

  const query = `
    query LatestAndroidBuild($projectId: String!) {
      project: projectById(projectId: $projectId) {
        builds(
          first: 5
          filter: { platform: ANDROID, status: FINISHED }
        ) {
          nodes {
            id
            status
            artifacts { applicationArchiveUrl }
          }
        }
      }
    }
  `

  try {
    const res = await fetch("https://api.expo.dev/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query,
        variables: { projectId: PROJECT_ID },
      }),
      // Cache for 5 minutes so we don't hammer the API on every download.
      next: { revalidate: 300 },
    })

    if (!res.ok) return null
    const json = await res.json()
    const nodes: EasBuildNode[] =
      json?.data?.project?.builds?.nodes ?? []

    for (const node of nodes) {
      const url = node.artifacts?.applicationArchiveUrl
      if (url) return url
    }
    return null
  } catch {
    return null
  }
}

export async function GET() {
  const apkUrl = (await getLatestApkUrl()) ?? FALLBACK_APK_URL

  // 302 so browsers/proxies don't cache a stale build forever.
  return NextResponse.redirect(apkUrl, { status: 302 })
}
