import React, { useEffect, useRef, useState } from "react";

function Stats() {
    const [isVisible, setIsVisible] = useState({});
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

    return ( 
        <div className="container mt-5 p-3">
            {/* Title */}
            <div className="text-center mb-5">
                <h2 
                    className="fw-bold fs-2 p-4 rounded-3 bg-gradient-to-r from-blue-50 to-purple-50 shadow-sm transition-all duration-700 hover:shadow-lg"
                    style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}
                >
                    Trust with confidence
                </h2>
            </div>

            {/* Center Image - Larger */}
            <div 
                ref={el => sectionRefs.current['centerImage'] = el}
                className={`row justify-content-center mb-5 transition-all duration-700 ${
                    isVisible.centerImage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
            >
                <div className="col-lg-10 text-center">
                    <div className="overflow-hidden rounded-3 shadow-lg">
                        <img 
                            src="assets/price.jpg" 
                            alt="ecosystem" 
                            className="img-fluid object-fit-contain hover:scale-105 transition-transform duration-500" 
                            style={{ width :'100%' , maxHeight : '700px' }}
                        />
                    </div>
                    <div className="links text-center mt-4">
                        <a href="/products" className="mx-3 inline-block hover:translate-x-1 transition-transform duration-300 px-4 py-2 rounded-pill bg-light hover:bg-primary hover:text-blue-600">
                            Explore our products &nbsp;<i className="fa-solid fa-arrow-right"></i> 
                        </a>
                        <a href="./" className="mx-3 inline-block hover:translate-x-1 transition-transform duration-300 px-4 py-2 rounded-pill bg-light hover:bg-primary hover:text-blue-600">
                            Try  Demo &nbsp;<i className="fa-solid fa-arrow-right"></i> 
                        </a>
                    </div>
                </div>
            </div>

            {/* Two Column Grid */}
            <div className="row mt-5 g-4">
                {/* Top Left - Customer First */}
                <div 
                    ref={el => sectionRefs.current['topLeft'] = el}
                    className={`col-lg-6 transition-all duration-700 ${
                        isVisible.topLeft ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <div className="h-100 p-4 rounded-3 shadow-sm hover:shadow-lg transition-all duration-500"
                         style={{
                             background: 'linear-gradient(135deg, #667eea15 0%, #764ba215 100%)',
                             border: '1px solid rgba(102, 126, 234, 0.1)'
                         }}>
                        <h3 className="mb-3 fw-bold" style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>Customer first always</h3>
                        <p className="mb-0">
                            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity 
                            investments, making us India's largest broker; contributing to 15% of daily 
                            retail exchange volumes in India.
                        </p>
                    </div>
                </div>

                {/* Top Right - No Spam */}
                <div 
                    ref={el => sectionRefs.current['topRight'] = el}
                    className={`col-lg-6 transition-all duration-700 delay-100 ${
                        isVisible.topRight ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <div className="h-100 p-4 rounded-3 shadow-sm hover:shadow-lg transition-all duration-500"
                         style={{
                             background: 'linear-gradient(135deg, #f093fb15 0%, #f5576c15 100%)',
                             border: '1px solid rgba(240, 147, 251, 0.1)'
                         }}>
                        <h3 className="mb-3 fw-bold" style={{
                            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>No Spam or gimmicks</h3>
                        <p className="mb-0">
                            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps 
                            that you use at your pace, the way you like.<a href="./" className="text-decoration-none hover:text-primary transition-colors"> Our philosophies</a>.
                        </p>
                    </div>
                </div>

                {/* Bottom Left - StockMates Universe */}
                <div 
                    ref={el => sectionRefs.current['bottomLeft'] = el}
                    className={`col-lg-6 transition-all duration-700 delay-200 ${
                        isVisible.bottomLeft ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <div className="h-100 p-4 rounded-3 shadow-sm hover:shadow-lg transition-all duration-500"
                         style={{
                             background: 'linear-gradient(135deg, #4facfe15 0%, #00f2fe15 100%)',
                             border: '1px solid rgba(79, 172, 254, 0.1)'
                         }}>
                        <h3 className="mb-3 fw-bold" style={{
                            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>The Stock Mates universe</h3>
                        <p className="mb-0">
                            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups 
                            offer you tailored services specific to your needs.
                        </p>
                    </div>
                </div>

                {/* Bottom Right - Do Better */}
                <div 
                    ref={el => sectionRefs.current['bottomRight'] = el}
                    className={`col-lg-6 transition-all duration-700 delay-300 ${
                        isVisible.bottomRight ? 'opacity-100 -translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    <div className="h-100 p-4 rounded-3 shadow-sm hover:shadow-lg transition-all duration-500"
                         style={{
                             background: 'linear-gradient(135deg, #43e97b15 0%, #38f9d715 100%)',
                             border: '1px solid rgba(67, 233, 123, 0.1)'
                         }}>
                        <h3 className="mb-3 fw-bold" style={{
                            background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>Do better with money</h3>
                        <p className="mb-0">
                            With initiatives like <a href="./" className="text-decoration-none hover:text-primary transition-colors">Nudge</a> and <a href="./" className="text-decoration-none hover:text-primary transition-colors">Kill Switch</a>, we don't just 
                            facilitate transactions, but actively help you do better with your money.
                        </p>
                    </div>
                </div>
            </div>

            {/* Press Logos */}
            <div 
                ref={el => sectionRefs.current['pressLogos'] = el}
                className={`transition-all duration-700 ${
                    isVisible.pressLogos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
                <img 
                    src="assets/pressLogos.png" 
                    alt="presslogo.png"  
                    className="mt-5 mb-5 d-flex justify-content-center mx-auto hover:scale-105 transition-transform duration-500" 
                    style={{ width: "80%", padding: "4rem" }}
                />
            </div>
        </div>
    );
}

export default Stats;