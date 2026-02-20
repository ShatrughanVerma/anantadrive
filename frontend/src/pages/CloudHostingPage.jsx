import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaCheck, FaShieldAlt, FaRocket, FaHeadset, FaDatabase, FaGlobe, FaCloud, FaSync } from 'react-icons/fa'
import './ServicePage.css'

const CloudHostingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: 'Cloud Starter',
      price: { monthly: 9.99, yearly: 99.99 },
      originalPrice: { monthly: 14.99, yearly: 149.99 },
      cpu: '1 vCPU',
      ram: '2 GB',
      storage: '50 GB NVMe SSD',
      bandwidth: '2 TB',
      features: [
        'Dedicated Resources',
        'Root Access',
        '99.9% Uptime',
        '24/7 Support'
      ],
      popular: false
    },
    {
      name: 'Cloud Pro',
      price: { monthly: 19.99, yearly: 199.99 },
      originalPrice: { monthly: 29.99, yearly: 299.99 },
      cpu: '2 vCPU',
      ram: '4 GB',
      storage: '100 GB NVMe SSD',
      bandwidth: '4 TB',
      features: [
        'Dedicated Resources',
        'Root Access',
        '99.9% Uptime',
        '24/7 Priority Support',
        'Load Balancer',
        'Auto-scaling'
      ],
      popular: true
    },
    {
      name: 'Cloud Enterprise',
      price: { monthly: 39.99, yearly: 399.99 },
      originalPrice: { monthly: 59.99, yearly: 599.99 },
      cpu: '4 vCPU',
      ram: '8 GB',
      storage: '200 GB NVMe SSD',
      bandwidth: '8 TB',
      features: [
        'Dedicated Resources',
        'Root Access',
        '99.99% Uptime',
        '24/7 Enterprise Support',
        'Load Balancer',
        'Auto-scaling',
        'Global CDN'
      ],
      popular: false
    }
  ]

  return (
    <div className="service-page">
      <Header />

      {/* Hero Section - Small */}
      <section className="page-hero-small">
        <div className="container">
          <h1 className="hero-title-small">Cloud Hosting</h1>
          <p className="hero-description-small">High-performance cloud infrastructure</p>
        </div>
      </section>

      {/* Pricing Section - Compact */}
      <section className="pricing-section-compact">
        <div className="container">
          <h2 className="section-title-small">Choose Your Plan</h2>

          {/* Billing Toggle - Small */}
          <div className="billing-toggle-small">
            <button 
              className={`toggle-btn-small ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`toggle-btn-small ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly <span className="save-badge-small">Save 20%</span>
            </button>
          </div>

          <div className="pricing-grid-compact">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`pricing-card-compact ${plan.popular ? 'popular' : ''}`}
              >
                {plan.popular && <div className="popular-badge-small">Popular</div>}
                
                <h3 className="plan-name-small">{plan.name}</h3>
                
                <div className="plan-price-small">
                  <span className="currency-small">$</span>
                  <span className="amount-small">{plan.price[billingCycle]}</span>
                  <span className="period-small">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>

                {plan.originalPrice && (
                  <div className="original-price-small">
                    <span className="strike-small">${plan.originalPrice[billingCycle]}</span>
                    <span className="discount-small">
                      Save {Math.round((1 - plan.price[billingCycle] / plan.originalPrice[billingCycle]) * 100)}%
                    </span>
                  </div>
                )}

                <div className="specs-compact">
                  <div className="spec-row">
                    <span className="spec-label">CPU:</span>
                    <span className="spec-value">{plan.cpu}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">RAM:</span>
                    <span className="spec-value">{plan.ram}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Storage:</span>
                    <span className="spec-value">{plan.storage}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Bandwidth:</span>
                    <span className="spec-value">{plan.bandwidth}</span>
                  </div>
                </div>

                <ul className="features-compact">
                  {plan.features.slice(0, 3).map((feature, i) => (
                    <li key={i}>
                      <FaCheck className="feature-icon-small" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="plan-btn-small">Select</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CloudHostingPage