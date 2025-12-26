import HeroProducts from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import ProductsUniverse from "./Universe";

function ProductPage() {
  return (
    <>
      {/* Hero */}
      <HeroProducts />

      {/* Product 1 */}
      <LeftSection
        imageUrl="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80"
        productName="Stockmates Trade"
        productDesc="A lightning-fast trading platform with real-time market data, interactive charts, and a clean, intuitive UI. Built for both beginners and active traders across web and mobile."
        tryDemo="/demo"
        learnMore="/products/trade"
      />

      {/* Product 2 */}
      <RightSection
        imageUrl="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80"
        productName="Stockmates Dashboard"
        productDesc="Your centralized investment dashboard. Track holdings, analyze performance, monitor orders, and gain insights with detailed visual reports."
        learnMore="/products/dashboard"
      />

      {/* Product 3 */}
      <LeftSection
        imageUrl="https://plus.unsplash.com/premium_photo-1661783001655-46a02e887842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D"
        productName="Stockmates Invest"
        productDesc="Invest smarter with long-term strategies, diversified portfolios, and commission-free instruments. Designed for stress-free, goal-oriented investing."
        tryDemo="/demo"
        learnMore="/products/invest"
      />

      {/* Product 4 */}
      <RightSection
        imageUrl="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1200&q=80"
        productName="Stockmates API"
        productDesc="Build custom trading tools, analytics platforms, or investment apps using secure and developer-friendly APIs. Perfect for startups and fintech innovators."
        learnMore="/products/api"
      />

      {/* Product 5 */}
      <LeftSection
        imageUrl="https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=1200&q=80"
        productName="Stockmates Learn"
        productDesc="A mobile-first learning platform with simplified lessons on stock markets, trading strategies, and personal finance — designed to help you learn on the go."
        learnMore="/learn"
      />

      {/* Ecosystem */}
      <ProductsUniverse />
    </>
  );
}

export default ProductPage;
