import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaCheck, FaShieldAlt, FaRocket, FaHeadset, FaDatabase, FaGlobe } from 'react-icons/fa'
import './ServicePage.css'

const WebHostingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: 'Basic',
      price: { monthly: 2.99, yearly: 29.99 },
      originalPrice: { monthly: 5.99, yearly: 59.99 },
      websites: 1,
      storage: '10 GB SSD',
      bandwidth: '100 GB',
      email: '5 Email Accounts',
      databases: 5,
      features: [
        'Free SSL Certificate',
        'Daily Backups',
        '99.9% Uptime',
        '24/7 Support'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: { monthly: 4.99, yearly: 49.99 },
      originalPrice: { monthly: 9.99, yearly: 99.99 },
      websites: 10,
      storage: '50 GB SSD',
      bandwidth: '500 GB',
      email: '25 Email Accounts',
      databases: 25,
      features: [
        'Free SSL Certificate',
        'Daily Backups',
        '99.9% Uptime',
        '24/7 Support',
        'Free CDN',
        'LiteSpeed Server'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: { monthly: 8.99, yearly: 89.99 },
      originalPrice: { monthly: 14.99, yearly: 149.99 },
      websites: 'Unlimited',
      storage: '200 GB SSD',
      bandwidth: 'Unlimited',
      email: 'Unlimited',
      databases: 'Unlimited',
      features: [
        'Free SSL Certificate',
        'Daily Backups',
        '99.9% Uptime',
        '24/7 Priority Support',
        'Free CDN',
        'LiteSpeed Server',
        'WordPress Optimized',
        'Staging Environment'
      ],
      popular: false
    }
  ]

  const features = [
    {
      icon: <FaRocket />,
      title: 'Lightning Fast Speed',
      description: 'SSD storage and LiteSpeed servers for 3x faster loading'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Advanced Security',
      description: 'Free SSL, DDoS protection, and automated daily backups'
    },
    {
      icon: <FaGlobe />,
      title: 'Global CDN',
      description: 'Content delivery network for faster global access'
    },
    {
      icon: <FaHeadset />,
      title: '24/7 Expert Support',
      description: 'Technical support available anytime via chat, email, or phone'
    },
    {
      icon: <FaDatabase />,
      title: 'Daily Backups',
      description: 'Automated daily backups with one-click restore'
    },
    {
      icon: <FaCheck />,
      title: '99.9% Uptime',
      description: 'Guaranteed uptime for your website'
    }
  ]

  const faqs = [
    {
      question: 'What is web hosting?',
      answer: 'Web hosting is a service that allows you to publish your website on the internet. We provide the technology and resources needed for your website to be viewed online.'
    },
    {
      question: 'Do you offer a money-back guarantee?',
      answer: 'Yes, we offer a 30-day money-back guarantee on all our hosting plans. If you are not satisfied, you can cancel within 30 days for a full refund.'
    },
    {
      question: 'Can I upgrade my plan later?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time from your dashboard. The price difference will be prorated.'
    },
    {
      question: 'Do you provide website migration?',
      answer: 'Yes, we offer free website migration for all new customers. Our experts will move your website to our servers without any downtime.'
    }
  ]

  return (
    <div className="service-page">
      <Header />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="hero-title">Web Hosting</h1>
          <p className="hero-description">
            Fast, secure, and reliable hosting for your website
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Support</span>
            </div>
            <div className="stat">
              <span className="stat-value">30-Day</span>
              <span className="stat-label">Money Back</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Choose Your Plan</h2>
            <p className="section-subtitle">Select the perfect hosting plan for your needs</p>
          </div>

          {/* Billing Toggle */}
          <div className="billing-toggle">
            <button 
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly <span className="save-badge">Save 20%</span>
            </button>
          </div>

          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              >
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                
                <h3 className="plan-name">{plan.name}</h3>
                
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price[billingCycle]}</span>
                  <span className="period">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
                </div>

                {plan.originalPrice && (
                  <div className="original-price">
                    <span className="strike">${plan.originalPrice[billingCycle]}</span>
                    <span className="discount">
                      Save {Math.round((1 - plan.price[billingCycle] / plan.originalPrice[billingCycle]) * 100)}%
                    </span>
                  </div>
                )}

                <ul className="plan-features">
                  <li>
                    <FaCheck className="feature-icon" />
                    <span>{plan.websites} Websites</span>
                  </li>
                  <li>
                    <FaCheck className="feature-icon" />
                    <span>{plan.storage} Storage</span>
                  </li>
                  <li>
                    <FaCheck className="feature-icon" />
                    <span>{plan.bandwidth} Bandwidth</span>
                  </li>
                  <li>
                    <FaCheck className="feature-icon" />
                    <span>{plan.email} Email</span>
                  </li>
                  <li>
                    <FaCheck className="feature-icon" />
                    <span>{plan.databases} Databases</span>
                  </li>
                  {plan.features.slice(0, 3).map((feature, i) => (
                    <li key={i}>
                      <FaCheck className="feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="plan-btn">Select Plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our Web Hosting?</h2>
            <p className="section-subtitle">
              Everything you need to build and grow your website
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <div className="container">
          <h2 className="section-title">Compare Hosting Plans</h2>
          
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Basic</th>
                  <th>Premium</th>
                  <th>Business</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Websites</td>
                  <td>1</td>
                  <td>10</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Storage</td>
                  <td>10 GB SSD</td>
                  <td>50 GB SSD</td>
                  <td>200 GB SSD</td>
                </tr>
                <tr>
                  <td>Bandwidth</td>
                  <td>100 GB</td>
                  <td>500 GB</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Email Accounts</td>
                  <td>5</td>
                  <td>25</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Databases</td>
                  <td>5</td>
                  <td>25</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Free SSL</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Daily Backups</td>
                  <td>✓</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>CDN</td>
                  <td>-</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>LiteSpeed Server</td>
                  <td>-</td>
                  <td>✓</td>
                  <td>✓</td>
                </tr>
                <tr>
                  <td>Priority Support</td>
                  <td>-</td>
                  <td>-</td>
                  <td>✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of happy customers with our reliable hosting</p>
          <button className="cta-btn">Start Your Free Trial</button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default WebHostingPage