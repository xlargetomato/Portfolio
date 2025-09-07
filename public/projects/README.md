# Project Images Directory

This directory contains images for your portfolio projects. Replace the placeholder files with actual screenshots of your projects.

## Image Guidelines

### **Recommended Specifications:**

- **Resolution**: 1200x800px (3:2 aspect ratio) for featured projects
- **Resolution**: 800x600px (4:3 aspect ratio) for regular projects
- **Format**: .jpg, .png, or .webp
- **File Size**: Keep under 500KB for optimal loading
- **Quality**: High quality but web-optimized

### **Current Project Images:**

1. **ecommerce-platform.jpg**

   - Project: E-Commerce Platform
   - Used in: Featured projects section
   - Suggested content: Homepage or product listing page screenshot

2. **task-manager.jpg**

   - Project: Task Management App
   - Used in: Featured projects section
   - Suggested content: Dashboard or kanban board view

3. **testing-suite.jpg**

   - Project: Testing Automation Suite
   - Used in: Other projects section
   - Suggested content: Test results dashboard or code editor

4. **weather-dashboard.jpg**

   - Project: Weather Dashboard
   - Used in: Other projects section
   - Suggested content: Main weather interface with charts

5. **unity-platformer.jpg**
   - Project: Unity 2D Platformer
   - Used in: Other projects section
   - Suggested content: Gameplay screenshot or level editor

## How to Add Images

1. **Replace placeholder files** with your actual project screenshots
2. **Keep the same filenames** or update the paths in `src/components/Projects.tsx`
3. **Optimize images** using tools like:
   - [TinyPNG](https://tinypng.com/) for compression
   - [Squoosh](https://squoosh.app/) for format conversion
   - [ImageOptim](https://imageoptim.com/) for Mac users

## Adding New Projects

When adding new projects:

1. Add the image file to this directory
2. Update the `projects` array in `src/components/Projects.tsx`
3. Include the `image` property with the correct path
4. Uncomment the `Image` component in the ProjectCard

## Image Optimization Tips

- Use **WebP format** when possible for better compression
- Include **alt text** for accessibility
- Consider using **Next.js Image component** for automatic optimization
- Test images on different screen sizes and devices

## Backup

Keep backup copies of your original high-resolution images in case you need to resize or reformat them later.
