# Copilot Fix Plan

## Accessibility Improvements
- Add `aria-label` attributes to navigation links.
- Ensure heading levels are sequential and use `section` landmarks.
- Add a `lang` attribute in `layout.hbs` (already present).

## Security Improvements
- Confirm static file serving is limited to the `public` directory.
- Avoid adding untrusted user input features unless sanitized.

## Performance Improvements
- Keep CSS small and avoid unused styles.
- Use optimized image assets if images are added later.

## Action Plan
1. Review `layout.hbs` HTML structure and add ARIA improvements.
2. Keep server routes simple and avoid form processing without validation.
3. Test the site manually in a browser after deployment.
