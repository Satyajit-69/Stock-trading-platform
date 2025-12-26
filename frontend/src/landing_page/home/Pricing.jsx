import React, { useEffect, useRef, useState } from 'react';

function Pricing() {
    const [isVisible, setIsVisible] = useState({});
    const [hoveredCard, setHoveredCard] = useState(null);
    const sectionRefs = useRef({});

    useEffect(() => {
        const observers = {};
        
        Object.keys(sectionRefs.current).forEach(key => {
            if (sectionRefs.current[key]) {
                observers[key] = new IntersectionObserver(
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            setIsVisible(prev => ({ ...prev, [key]: true }));
                        }
                    },
                    { threshold: 0.1 }
                );
                observers[key].observe(sectionRefs.current[key]);
            }
        });

        return () => {
            Object.values(observers).forEach(observer => observer.disconnect());
        };
    }, []);

    const pricingCards = [
        {
            id: 'card1',
            image: 'assets/pricing0.svg',
            title: 'Free account opening',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            bgGradient: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
            description: 'Get started with zero fees',
            subtitle: ''
        },
        {
            id: 'card2',
            image: 'assets/pricing0.svg',
            title: 'Free equity delivery',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            bgGradient: 'linear-gradient(135deg, #f093fb15 0%, #f5576c15 100%)',
            description: 'Zero brokerage on delivery trades',
            subtitle: 'and direct mutual funds'
        },
        {
            id: 'card3',
            image: 'assets/intradayTrades.svg',
            title: 'Intraday and F&O',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            bgGradient: 'linear-gradient(135deg, #4facfe15 0%, #00f2fe15 100%)',
            description: 'Flat ₹20 per trade',
            subtitle: ''
        }
    ];

    return (
        <div className="position-relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}>
            {/* Animated Background Elements */}
            <div className="position-absolute" style={{
                top: '-100px',
                right: '-100px',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 6s ease-in-out infinite'
            }}></div>
            
            <div className="position-absolute" style={{
                bottom: '-150px',
                left: '-150px',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(240, 147, 251, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'float 8s ease-in-out infinite reverse'
            }}></div>

            <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
                <div className="row align-items-center">
                    {/* Left Section */}
                    <div 
                        ref={el => sectionRefs.current['leftSection'] = el}
                        className={`col-lg-5 mb-5 mb-lg-0 transition-all duration-700 ${
                            isVisible.leftSection ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-12'
                        }`}
                    >
                        <div className="p-4 rounded-4 backdrop-blur-sm" style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                            border: '1px solid rgba(255, 255, 255, 0.18)'
                        }}>
                            <h3 className="mt-2 mb-4 fw-bold display-6" style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                Unbeatable pricing
                            </h3>
                            <p className="mt-4 fs-5 text-muted">
                                We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                            </p>
                            <a 
                                href="/pricing" 
                                className="text-decoration-none d-inline-block mt-3 px-4 py-3 rounded-pill fw-semibold transition-all duration-300"
                                style={{
                                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                                    transform: 'translateY(0)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                                }}
                            >
                                See pricing &nbsp;<i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Cards */}
                    <div className="col-lg-7">
                        <div className="row g-4">
                            {pricingCards.map((card, index) => (
                                <div 
                                    key={card.id}
                                    ref={el => sectionRefs.current[card.id] = el}
                                    className={`col-md-4 transition-all duration-700 ${
                                        isVisible[card.id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                    }`}
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    <div 
                                        className="text-center p-4 rounded-4 h-100 position-relative overflow-hidden transition-all duration-500"
                                        style={{
                                            background: hoveredCard === card.id 
                                                ? card.bgGradient 
                                                : 'rgba(255, 255, 255, 0.9)',
                                            boxShadow: hoveredCard === card.id 
                                                ? '0 20px 40px rgba(0, 0, 0, 0.15)' 
                                                : '0 4px 15px rgba(0, 0, 0, 0.08)',
                                            transform: hoveredCard === card.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                                            border: `2px solid ${hoveredCard === card.id ? 'rgba(102, 126, 234, 0.3)' : 'rgba(0, 0, 0, 0.05)'}`,
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={() => setHoveredCard(card.id)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                    >
                                        {/* Shine Effect */}
                                        <div 
                                            className="position-absolute"
                                            style={{
                                                top: '-50%',
                                                left: '-50%',
                                                width: '200%',
                                                height: '200%',
                                                background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                                                transform: hoveredCard === card.id ? 'translateX(100%)' : 'translateX(-100%)',
                                                transition: 'transform 0.6s ease',
                                                pointerEvents: 'none'
                                            }}
                                        ></div>

                                        <div className="position-relative">
                                            <div 
                                                className="d-inline-block p-3 rounded-circle mb-3 transition-all duration-500"
                                                style={{
                                                    background: card.bgGradient,
                                                    transform: hoveredCard === card.id ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                                                }}
                                            >
                                                <img 
                                                    src={card.image} 
                                                    alt={card.title} 
                                                    style={{ 
                                                        width: "80px", 
                                                        height: "80px",
                                                        filter: hoveredCard === card.id ? 'brightness(1.2)' : 'brightness(1)',
                                                        transition: 'filter 0.3s ease'
                                                    }} 
                                                />
                                            </div>
                                            
                                            <h5 
                                                className="fw-bold mb-2 transition-all duration-300"
                                                style={{
                                                    color: hoveredCard === card.id ? 'transparent' : '#000',
                                                    background: hoveredCard === card.id ? card.gradient : 'none',
                                                    WebkitBackgroundClip: hoveredCard === card.id ? 'text' : 'unset',
                                                    WebkitTextFillColor: hoveredCard === card.id ? 'transparent' : '#000',
                                                    backgroundClip: hoveredCard === card.id ? 'text' : 'unset'
                                                }}
                                            >
                                                {card.title}
                                            </h5>
                                            
                                            {card.subtitle && (
                                                <p className="text-muted small mb-2">{card.subtitle}</p>
                                            )}
                                            
                                            <p 
                                                className="small mb-0 transition-opacity duration-300"
                                                style={{
                                                    opacity: hoveredCard === card.id ? 1 : 0.7,
                                                    color: hoveredCard === card.id ? '#495057' : '#6c757d'
                                                }}
                                            >
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                
                .backdrop-blur-sm {
                    backdrop-filter: blur(10px);
                }
            `}</style>
        </div>
    );
}

export default Pricing;