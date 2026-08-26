import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Callout } from 'fumadocs-ui/components/callout';
import type { MDXComponents } from 'mdx/types';
import { Hero } from '@/components/hero';
import { FeatureGrid } from '@/components/feature-grid';
import { FeatureCard } from '@/components/feature-card';
import { StepList } from '@/components/step-list';
import { GithubStar } from '@/components/github-star';
import { About } from '@/components/about';
import { LastUpdated } from '@/components/last-updated';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    // Fumadocs content components (used across migrated docs)
    Tab,
    Tabs,
    Step,
    Steps,
    Card,
    Cards,
    Accordion,
    Accordions,
    Callout,
    // Caracal brand components
    Hero,
    FeatureGrid,
    FeatureCard,
    StepList,
    GithubStar,
    About,
    LastUpdated,
    ...components,
  };
}
