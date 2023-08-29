'use client'

import { useState } from 'react'
import { CheckIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
    {
        name: 'Freelancer',
        id: 'freelancer',
        href: 'https://app.supercontent.dev',
        description: 'Essentials for your work.',
        price: { monthly: '$15', annually: '$144' },
        features: ['5 products', '10 posts', 'Stripe integration', '48-hour support'],
        mostPopular: true,
        available: true,
        freeTrial: true,
    },
    {
        name: 'Startup',
        id: 'startup',
        href: '#',
        description: 'Scales with your business.',
        price: { monthly: '$30', annually: '$288' },
        features: ['25 products', '50 posts', 'Stripe integration', '24-hour support', 'Marketing automations'],
        mostPopular: false,
        available: false,
        freeTrial: true,
    },
    {
        name: 'Enterprise',
        id: 'enterprise',
        href: '#',
        description: 'Dedicated support and infrastructure with AI capabilities and Stripe integration.',
        price: { monthly: '$48', annually: '$576' },
        features: ['Unlimited products', 'Unlimited posts', 'Stripe integration', '1-hour dedicated support', 'Marketing automations', 'AI-powered insights'],
        mostPopular: false,
        available: false,
        freeTrial: true,
    },
];


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [frequency, setFrequency] = useState(frequencies[0])

    return (
        <div className="bg-indigo-950 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Affordable Plans, Powerful Features
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
                    Explore our pricing plans tailored to meet your needs. Select the plan that offers the best features for your audience engagement, customer loyalty, and sales growth.
                </p>
                <div className="mt-16 flex justify-center">
                    <div className="flex items-center">
                        {frequencies.map((freq) => (
                            <Button
                                key={freq.value}
                                variant={frequency.value === freq.value ? 'glassmorph' : 'ghost'}
                                onClick={() => setFrequency(freq)}
                                className="mx-1"
                            >
                                {freq.label}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.mostPopular ? 'bg-white/5 ring-2 ring-primary' : 'ring-1 ring-white/10',
                                'rounded-3xl p-8 xl:p-10'
                            )}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                                    {tier.name}
                                </h3>
                                {tier.mostPopular ? (
                                    <p className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                                        Most popular
                                    </p>
                                ) : null}
                            </div>
                            <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                {// @ts-ignore
                                 <span className="text-4xl font-bold tracking-tight text-white">{tier.price[frequency.value]}</span>}
                                <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span>
                            </p>
                            <Link
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-primary text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-primary'
                                        : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                                )}
                            >
                                {tier.available ? tier.freeTrial ? "Try 14-day free trial" : "Get started" : 'Coming soon'}
                            </Link>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-white" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}