# single-spa-vite-microfrontend

**Standalone micro-frontend module built with Vite for use in Single SPA architecture**

This project demonstrates how to create a micro-frontend service that can be loaded dynamically by a Single SPA host application. It uses **Vite** as the build tool for fast development and modern output, and integrates seamlessly with any host registered via `importmap`.

## 🧩 Features

- Minimal and clean implementation of Single SPA lifecycle methods: `bootstrap`, `mount`, `unmount`.
- Built with **Vite** — enabling native ESM and lightning-fast HMR.
- Easily extendable architecture for real production use cases.
- Compatible with the [`single-spa-vite-host`](https://github.com/sw1tch3roo/single-spa-vite-host) repository.

## 🌍 Use Case

This repo is intended to be one of the micro-frontends dynamically loaded by a Vite-based host. It represents an actual working example of how micro-apps can be deployed and developed independently, then integrated at runtime with a container.

## 🧠 Why It Matters

This was one of the **first public implementations** of a Vite-powered micro-frontend inside Single SPA architecture. Before this, most examples used only Webpack. This example provides a lightweight and modern alternative for engineers seeking a better dev experience.

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/sw1tch3roo/single-spa-vite-microfrontend.git
cd single-spa-vite-microfrontend
pnpm i
pnpm preview
