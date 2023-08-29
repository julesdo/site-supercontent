import { BadgePlusIcon } from "lucide-react"

const features = [
    {
      name: 'Lightning-Fast Content Creation',
      description: 'Effortlessly create content with Supercontent, saving time for your business.',
      icon: BadgePlusIcon,
    },
    {
      name: 'Effortless Inventory Management',
      description: 'Manage stock effortlessly, with alerts for reorder, streamlining operations.',
      icon: BadgePlusIcon,
    },
    {
      name: 'Instant Blog Post Generation',
      description: 'Generate SEO-friendly blog posts quickly, keeping your audience engaged.',
      icon: BadgePlusIcon,
    },
    {
      name: 'Multi-Site Management Made Easy',
      description: 'Efficiently oversee and update multiple sites in one dashboard.',
      icon: BadgePlusIcon,
    },
    {
      name: 'Seamless API Integration',
      description: 'Instantly integrate your data and products anywhere with Supercontent’s APIs.',
      icon: BadgePlusIcon,
    },
    {
      name: 'Transform Your Workflow',
      description: 'Revolutionize your workflow with Supercontent’s powerful features.',
      icon: BadgePlusIcon,
    }
  ];
  
  export default function Example() {
    return (
      <div className="bg-indigo-950 py-0 sm:py-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
  <div className="mx-auto max-w-2xl sm:text-center">
    <h2 className="text-base font-semibold leading-7 text-indigo-400">Elevate Your E-commerce</h2>
    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Supercontent for Seamless E-commerce</p>
    <p className="mt-6 text-lg leading-8 text-gray-300">
      Supercharge your e-commerce with Supercontent. Create, manage, and integrate effortlessly. Elevate your workflow today!
    </p>
  </div>
</div>

<div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
  <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
    {features.map((feature) => (
      <div key={feature.name} className="relative pl-9">
        <dt className="inline font-semibold text-white">
          <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
          {feature.name}
        </dt>{' '}
        <dd className="inline">{feature.description}</dd>
      </div>
    ))}
  </dl>
</div>
</div>
)
}
