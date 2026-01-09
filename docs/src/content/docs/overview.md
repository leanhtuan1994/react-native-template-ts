---
title: Overview
description: An overview of why we built this starter, including its features, the libraries used, and more.
head:
  - tag: title
    content: Overview | React Native / Expo Starter
---

Welcome to the Atlas Expo / React Native Starter Kit!

## 🚀 Motivation

The goal of this starter kit is to streamline the process of building React Native apps. It provides a resource for creating high-quality apps faster and with less effort, while ensuring projects adhere to consistent code standards and architectural principles.

The benefits of using this starter kit are numerous. It provides a consistent foundation that makes it easy to switch between projects and focus on business logic rather than boilerplate code. Because it promotes consistency, it makes apps easier to maintain and scale.

Overall, this starter kit is designed to facilitate efficient and effective app development, helping you bring the best possible products to your users.

## ✍️ Philosophy

When creating this starter kit, we had several guiding principles in mind::

- **🚀 Production-ready**: We wanted to ensure that this starter was ready for real-world use, providing a solid foundation for building production-grade apps.
- **🥷 Developer experience and productivity**: Our focus was on creating a starter that would enhance the developer experience and increase productivity.
- **🧩 Minimal code and dependencies**: We aimed to keep the codebase and dependencies as small as possible.
- **💪 Well-maintained third-party libraries**: We included only well-maintained and reliable third-party libraries, to provide stability and support for our projects.

## ⭐ Key Features

### Core Framework & Performance

- ✅ **Latest Expo SDK 54** with Custom Dev Client: Leverage the best of the Expo ecosystem while maintaining full control over your app.
- ⚡ **React 19** with [React Compiler](https://react.dev/learn/react-compiler) enabled: Automatic optimization without manual memoization.
- 🏗️ **New Architecture** enabled: Fabric renderer, TurboModules, and JSI for superior performance.
- 🎉 [TypeScript](https://www.typescriptlang.org/) for enhanced code quality and bug prevention through static type checking.

### Navigation & Routing

- ☂️ [Expo Router v6](https://docs.expo.dev/router/introduction/) with **typed routes** and route groups for type-safe, file-based navigation.
- 🗺️ **30 interactive component showcases** organized in route groups for learning and reference.

### UI & Styling

- 💅 **Production-ready UI** with [HeroUI Native](https://v3.heroui.com/docs/native/getting-started) (30+ components) and [Uniwind](https://docs.uniwind.dev/) for TailwindCSS styling.
- 🎨 **6 custom components** (Image, Text, Input, List, Modal, StatusBar) for specialized needs.
- 🌗 **Dark mode support** with system preference detection.

### State Management & Data

- 💫 **Zustand** for global client state with selectors pattern for optimal performance.
- 🔥 [React Query v5](https://tanstack.com/query/latest) with [react-query-kit](https://github.com/liaoliao666/react-query-kit) for type-safe server state management.
- 💾 [MMKV](https://github.com/mrousavy/react-native-mmkv) for fast, encrypted storage (30x faster than AsyncStorage).
- 🧵 Robust form handling with [react-hook-form](https://react-hook-form.com/) and [zod](https://zod.dev/) validation.

### Development Experience

- ⚙️ **Multi-environment build** support (Development, Staging, Production) with environment-specific configs.
- 💡 Clean project structure with **absolute imports** (`@/`) for easier navigation.
- 🗂 **VSCode** recommended extensions, settings, and snippets for enhanced productivity.
- 🦊 **Husky** for Git Hooks to automate code quality checks.
- 🚫 **Lint-staged**: Run ESLint and TypeScript checks on staged files only.
- 📦 **pnpm** enforced for fast, disk-efficient package management.

### Testing & Quality

- 🧪 **Unit testing** with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).
- 🔍 **E2E testing** with [Maestro](https://maestro.mobile.dev/) (3 workflow variants included).
- 🛠 **14 GitHub Actions workflows** for automated building, releasing, testing, and quality checks.
- 🏥 **Expo Doctor** integration for health checks and dependency validation.

### Internationalization & Accessibility

- 🎯 **i18next** for localization with ESLint validation of translation files.
- ♿ Accessibility-first component design with ARIA support.

### Additional Features

- 🖼️ **Automatic image compression** in PRs to reduce bundle size.
- 📱 **Deep linking** configured for all routes out of the box.
- 🎹 Advanced **keyboard handling** with react-native-keyboard-controller.
- 🎬 **Smooth animations** with Reanimated and Moti.
- 🚨 **Error boundaries** with react-error-boundary for graceful error handling.

## 🤔 Is this starter for me?

Yes 😀

This starter kit is designed to benefit a wide range of React Native developers, from beginners to experienced professionals. Here's why it might be a good fit for you:

1. **For beginners:** It provides a solid foundation with best practices and common solutions, helping you learn industry-standard approaches to React Native development.

2. **For experienced developers:** It offers a well-structured, production-ready setup that can save you time and effort in project initialization and configuration.

3. **For teams:** It ensures consistency across projects and team members, making it easier to onboard new developers and maintain code quality.

4. **For explorers:** Even if you prefer not to use starter kits, this project can serve as a valuable reference. You can explore the codebase, documentation, and architectural decisions to gain insights and potentially adopt specific solutions for your own projects.

5. **For learners:** The starter kit incorporates up-to-date libraries and patterns, offering an opportunity to familiarize yourself with current best practices in the React Native ecosystem.

6. **For AI-assisted development:** This starter kit works well with AI coding tools. It provides a solid structure and best practices that can guide AI-generated code. This helps ensure that AI assistance leads to high-quality, maintainable code that fits well within your project.

Remember, you don't have to use the entire starter kit as-is. Feel free to cherry-pick ideas, configurations, or code snippets that align with your project needs. Whether you're building a new app from scratch or looking to improve your existing development process, this starter kit can provide valuable insights and practical solutions.

## 😉 Why Expo and not React Native CLI?

We have been using Expo as our main framework since the introduction of [Continuous Native Generation (CNG)](https://docs.expo.dev/workflow/continuous-native-generation/) concept and we are happy with the experience.

I think this question is not valid anymore specially after the last React conference when the core react native team recommended using Expo for new projects.

> "As of today, the only recommended community framework for React Native is Expo. Folks at Expo have been investing in the React Native ecosystem since the early days of React Native and as of today, we believe the developer experience offered by Expo is best in class." React native core team

Still hesitating? Check out this [article](https://reactnative.dev/blog/2024/06/25/use-a-framework-to-build-react-native-apps) or this [video](https://www.youtube.com/watch?v=lifGTznLBcw), maybe this one [video](https://www.youtube.com/watch?v=ek_IdGC0G80) too.

## 🧑‍💻 Stay up to date

We are committed to continually improving our starter kit and providing the best possible resources for building React Native apps. To that end, we regularly add new features and fix any bugs that are discovered.

If you want to stay up to date with the latest developments in our starter kit, you can either watch the repository or hit the "star" button. This will allow you to receive notifications whenever new updates are available.

We value the feedback and contributions of our users, and we encourage you to let us know if you have any suggestions for improving our starter kit. We are always looking for ways to make it even more effective and useful for our community. So, please do not hesitate to reach out and share your thoughts with us.

<!-- add a gif image here  -->

## 💎 Libraries used

### Core Framework

- [React](https://react.dev/) 19.1.0 with [React Compiler](https://react.dev/learn/react-compiler)
- [React Native](https://reactnative.dev/) 0.81.5 with [New Architecture](https://reactnative.dev/docs/new-architecture-intro)
- [Expo SDK](https://docs.expo.dev/) 54.0.31
- [TypeScript](https://www.typescriptlang.org/) 5.9.3

### Navigation & Routing

- [Expo Router](https://docs.expo.dev/router/introduction/) 6.0.21 (typed routes enabled)

### UI & Styling

- [HeroUI Native](https://v3.heroui.com/docs/native/getting-started) 1.0.0-beta.11 (30+ components)
- [Uniwind](https://docs.uniwind.dev/) 1.2.2 (TailwindCSS for React Native)
- [Tailwind Variants](https://www.tailwind-variants.org/)
- [React Native Svg](https://github.com/software-mansion/react-native-svg)

### State Management & Data Fetching

- [Zustand](https://github.com/pmndrs/zustand) 5.0.5
- [React Query](https://tanstack.com/query/latest) 5.52.1
- [react-query-kit](https://github.com/liaoliao666/react-query-kit) (type-safe query wrapper)
- [Axios](https://axios-http.com/docs/intro)

### Forms & Validation

- [React Hook Form](https://react-hook-form.com/) 7.53.0
- [Zod](https://zod.dev/) 3.23.8

### Storage

- [React Native MMKV](https://github.com/mrousavy/react-native-mmkv) 4.1.0

### Animations & Interactions

- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/docs/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- [Moti](https://moti.fyi/)

### Lists & Performance

- [FlashList](https://github.com/Shopify/flash-list) (optimized lists)

### Internationalization

- [i18next](https://www.i18next.com/)
- [react-i18next](https://react.i18next.com/)

### Developer Experience

- [React Native Keyboard Controller](https://github.com/kirillzyusko/react-native-keyboard-controller)
- [React Error Boundaries](https://github.com/bvaughn/react-error-boundary)
- [Expo Image](https://docs.expo.dev/versions/latest/sdk/image/)
- [React Native Safe Area Context](https://github.com/th3rdwave/react-native-safe-area-context)
- [React Native Screens](https://github.com/software-mansion/react-native-screens)

### Testing

- [Jest](https://jestjs.io/) 29
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Maestro](https://maestro.mobile.dev/) (E2E testing)

### Package Management

- [pnpm](https://pnpm.io/) 10.12.3 (enforced via preinstall script)

## Contributors

This starter is maintained by [Tuan Anh Le](https://leanhtuan1994.github.io/team) and I welcome new contributors to join in improving it. If you're interested in getting involved, please don't hesitate to open an issue or submit a pull request.

In addition to maintaining this starter kit, I'm available for custom projects and consulting. If you're looking for an experienced React Native developer to bring your app vision to life, please visit [leanhtuan1994.github.io/contact](https://leanhtuan1994.github.io/contact) to get in touch. I'd be happy to discuss your project and explore how I can help you achieve your goals.

## ❓ FAQ

If you have any questions about the starter and want answers, please check out the [Discussions](https://github.com/leanhtuan1994/react-native-template-atlas/discussions) page.
