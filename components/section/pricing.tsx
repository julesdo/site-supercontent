'use client'

import { useState } from 'react'
import { CheckIcon } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

export const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]

export const plans = [
    {
        name: 'Free',
        id: 'free',
        description: 'Essentials to get your business started.',
        price: { monthly: 0, annually: 0 },
        products: 2,
        posts: 5,
        basicSupport: true,
        active: true,
    },
    {
        name: 'Individual',
        id: 'Individual',
        description: 'Essentials to get your business started.',
        price: { monthly: 9, annually: 85 },
        products: 5,
        posts: 10,
        basicSupport: true,
        active: true,
    },
    {
        name: 'Freelancer',
        id: 'freelancer',
        description: 'Essentials for your work.',
        price: { monthly: 19, annually: 182 },
        products: 10,
        posts: 20,
        basicSupport: true,
        active: true,
    },
    {
        name: 'Startup',
        id: 'startup',
        description: 'Scales with your business.',
        price: { monthly: 49, annually: 470 },
        products: 50,
        posts: 100,
        basicSupport: true,
        active: true,
    },
    {
        name: 'Enterprise',
        id: 'enterprise',
        description: 'Dedicated support and infrastructure with AI capabilities and Stripe integration.',
        price: { monthly: 89, annually: 854 },
        products: 'Unlimited',
        posts: 'Unlimited',
        basicSupport: true,
        active: true,
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
                                data-umami-event-clicPricingFrequence={freq.value}
                            >
                                {freq.label}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={classNames(
                                plan.id === 'freelancer' ? 'bg-white/5 ring-2 ring-primary' : 'ring-1 ring-white/10',
                                'rounded-3xl p-8 xl:p-10'
                            )}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h3 id={plan.id} className="text-lg font-semibold leading-8 text-white">
                                    {plan.name}
                                </h3>
                                {plan.id === 'free' ? (
                                    <p className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                                        Most popular
                                    </p>
                                ) : null}
                            </div>
                            <p className="mt-4 text-sm leading-6 text-gray-300">{plan.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                {frequency.value === 'monthly' ? (
                                    <span className="text-4xl font-bold tracking-tight text-white">${plan.price.monthly}</span>
                                ) : (
                                    <span className="text-4xl font-bold tracking-tight text-white">${plan.price.annually}</span>
                                )}
                                <span className="text-sm font-semibold leading-6 text-gray-300">{frequency.priceSuffix}</span>
                            </p>
                            <Link
                                href={plan.id === 'free' ? 'https://app.supercontent.dev' : '#'}
                                aria-describedby={plan.id}
                                data-umami-event-pricingChoice={plan.name}
                                className={classNames(
                                    plan.id === 'free'
                                        ? 'bg-primary text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-primary'
                                        : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                                )}
                            >
                                {plan.id === 'free' ? (plan.active  ? 'Get your free access' : 'Get started') : 'Coming soon'}
                            </Link>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                                {[
                                    `${plan.products} products`,
                                    `${plan.posts} posts`,
                                    'Stripe integration',
                                    plan.basicSupport ? 'Basic support' : '',
                                    'Marketing automations',
                                ].map((feature, index) => (
                                    <li key={index} className="flex gap-x-3">
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
