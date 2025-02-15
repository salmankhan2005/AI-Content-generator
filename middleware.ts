import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define which routes should be protected.
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

// Use clerkMiddleware with an async handler that protects routes matching our matcher.
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

// This configuration tells Next.js which routes the middleware should run on.
export const config = {
  matcher: [
    // Skip Next.js internals and static files.
    '/((?!.*\\..*|_next).*)',
    // Always run for API routes.
    '/(api|trpc)(.*)',
  ],
};
