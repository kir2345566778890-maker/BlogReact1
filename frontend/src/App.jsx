import React, { useState } from 'react';

const App = () => {
  // State Management
  const [userName] = useState('Alex');
  const [caloriesConsumed, setCaloriesConsumed] = useState(1540);
  const [caloriesTarget] = useState(2200);
  const [waterConsumed, setWaterConsumed] = useState(1.4);
  const [waterTarget] = useState(2.0);
  const [activeNavItem, setActiveNavItem] = useState('Dashboard');
  
  // Macro data
  const [macros] = useState({
    protein: { current: 95, target: 150, unit: 'g' },
    carbs: { current: 180, target: 250, unit: 'g' },
    fats: { current: 42, target: 60, unit: 'g' }
  });

  // Meal data
  const [meals] = useState([
    {
      id: 1,
      type: 'Breakfast',
      time: '08:30',
      name: 'Berry Greek Yogurt',
      calories: 320,
      protein: 24,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSMzKw15TWA3yusB98NSuv4IO1ko2ImYVRBrcFnnuR_DJlhYwefkFyJIZt8-v1BelYTfFoF5Rmfe0JpxRH0oTPKbHWxd-gVgLDkFpm7lgRVla_hL2iJ2BWwBj4FrcZ_WqAKS_sxJAtdqmoOe759GEHzDU6LMPXPzqB2DJymuTb3lBG4UIOeY8FVUwAoB60_YzI45fKdzrmx3XfG9iapy4xlQSG-caa1oolyojtTR2a78ysfC04gTN6rmgIOxQFBDWBwPWolvF3GMz1',
      tags: ['High Protein', 'Quick Fix']
    },
    {
      id: 2,
      type: 'Lunch',
      time: '13:00',
      name: 'Herb Grilled Chicken',
      calories: 450,
      protein: 42,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRoGJeZc4uLGEUvLUGJBOCkGyXKtFCLgXzMDBtWSN8PpVftKbc7KQpgKYgAMoneWVfp7bWyHbCQKXe-difW1cuUps-5x7C1Twr3MXcPD7HbJP9QFAma60O06DltGm4ioJRn7yBkeVheH34nH_y1iQsy9XqEbS6elwywezIUBp8xzX-55xiv5tAMLdcHkb8DsDMaI3DqT92KoPPxlkBscvCFhX7sXnruYJDMeLZ4Ml1ogv_q91qUWxtRRYLxBtAQOhRDY7_PTGRTGs0',
      tags: ['Low Carb', 'Meal Prep']
    }
  ]);

  // Calculate percentages
  const caloriesPercentage = (caloriesConsumed / caloriesTarget) * 100;
  const waterPercentage = (waterConsumed / waterTarget) * 100;
  const caloriesRemaining = caloriesTarget - caloriesConsumed;
  
  // Generate Diet Plan Handler
  const handleGenerateDietPlan = () => {
    console.log('Generating diet plan...');
    // Add your diet plan generation logic here
    alert('Diet plan generation functionality - implement your logic here!');
  };

  // SVG circle calculations
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (caloriesPercentage / 100) * circumference;

  // Handle water addition
  const handleAddWater = () => {
    if (waterConsumed < waterTarget) {
      setWaterConsumed(prev => Math.min(prev + 0.25, waterTarget));
    }
  };

  // Calculate water glasses (6 total for 2.0L)
  const totalGlasses = 6;
  const filledGlasses = Math.floor((waterConsumed / waterTarget) * totalGlasses);

  // Navigation handler
  const handleNavClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center w-full px-4 md:px-12 py-4 max-w-[1200px] mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-bold text-primary">DietPlanner</span>
            <div className="hidden md:flex items-center gap-6">
              {['Dashboard', 'Recipes', 'Tips', 'Community'].map(item => (
                <a
                  key={item}
                  href="#"
                  className={`text-sm font-semibold transition-colors ${
                    activeNavItem === item
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                search
              </span>
              <input
                type="text"
                placeholder="Search nutrition..."
                className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary w-64 transition-all outline-none"
              />
            </div>
            <button className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-semibold hover:scale-95 duration-150 ease-in-out">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-4 md:px-12 py-12">
        {/* Welcome Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-on-surface">
            Good morning, {userName}!
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl">
            You're <span className="text-primary font-bold">{Math.round(waterPercentage)}%</span> of the way to your daily water goal. 
            Keep it up—consistency is the secret ingredient!
          </p>
          <div className="mt-6 flex gap-4">
            <button 
              onClick={handleGenerateDietPlan}
              className="bg-primary text-on-primary px-8 py-3 rounded-full text-sm font-semibold shadow-lg hover:scale-95 transition-transform flex items-center gap-2"
            >
              <span className="material-symbols-outlined">auto_awesome</span>
              Generate Diet Plan
            </button>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Daily Progress Card */}
          <section className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-semibold text-on-surface">Daily Progress</h2>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">Nutritional Overview</p>
              </div>
              <div className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs">
                Target: {caloriesTarget.toLocaleString()} kcal
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calorie Meter */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-surface-container-high stroke-current"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      r={radius}
                      strokeWidth="10"
                    />
                    <circle
                      className="text-primary stroke-current transition-all duration-350"
                      cx="50"
                      cy="50"
                      fill="transparent"
                      r={radius}
                      strokeLinecap="round"
                      strokeWidth="10"
                      style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: strokeDashoffset,
                        transform: 'rotate(-90deg)',
                        transformOrigin: '50% 50%'
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-primary">{caloriesConsumed.toLocaleString()}</span>
                    <span className="text-xs text-on-surface-variant">Consumed</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-on-surface-variant">{caloriesRemaining} kcal remaining</p>
              </div>

              {/* Macro Breakdown */}
              <div className="flex flex-col justify-center space-y-6">
                {Object.entries(macros).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-bold text-on-surface capitalize">{key}</span>
                      <span className="text-on-surface-variant">
                        {value.current}{value.unit} / {value.target}{value.unit}
                      </span>
                    </div>
                    <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          key === 'protein' ? 'bg-primary' :
                          key === 'carbs' ? 'bg-secondary-fixed-dim' :
                          'bg-tertiary'
                        }`}
                        style={{ width: `${(value.current / value.target) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Sidebar Cards */}
          <section className="md:col-span-4 flex flex-col gap-6">
            {/* Hydration Card */}
            <div className="bg-secondary-container p-6 rounded-xl shadow-sm flex-1">
              <div className="flex items-start justify-between mb-4">
                <span className="material-symbols-outlined text-primary-container text-4xl">water_drop</span>
                <span className="bg-surface-container-lowest/50 text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs">
                  Active Goal
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-on-secondary-container mb-2">Stay Hydrated</h3>
              <p className="text-base text-on-secondary-container/80 mb-6">
                You've logged {waterConsumed}L of your {waterTarget}L daily goal. Time for a glass!
              </p>
              
              <div className="flex gap-2 mb-6">
                {[...Array(totalGlasses)].map((_, index) => (
                  <div
                    key={index}
                    className={`w-8 h-10 rounded-sm ${
                      index < filledGlasses ? 'bg-primary opacity-100' : 'bg-primary/20'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleAddWater}
                className="w-full bg-primary-container text-on-primary-container py-3 rounded-full text-sm font-semibold hover:scale-[0.98] transition-transform flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined">add</span>
                Add 250ml
              </button>
            </div>

            {/* Tip of the Day */}
            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border-l-4 border-primary">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary">lightbulb</span>
                <span className="text-sm font-semibold text-primary">Tip of the Day</span>
              </div>
              <h4 className="font-bold text-on-surface mb-2">The Fiber First Rule</h4>
              <p className="text-base text-on-surface-variant leading-relaxed">
                Starting your meals with a salad or non-starchy vegetables can improve 
                blood sugar response and keep you full longer.
              </p>
            </div>
          </section>

          {/* Meal Schedule */}
          <section className="md:col-span-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-on-surface">Today's Meal Schedule</h2>
              <button className="text-primary text-sm font-semibold hover:underline">View Full Calendar</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {meals.map(meal => (
                <div key={meal.id} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm group hover:-translate-y-1 transition-all duration-300">
                  <div className="h-40 relative">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${meal.image})` }}
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                      {meal.type} • {meal.time}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-semibold text-on-surface mb-1">{meal.name}</h4>
                    <p className="text-xs text-on-surface-variant mb-4">
                      {meal.calories} kcal • {meal.protein}g Protein
                    </p>
                    <div className="flex gap-2">
                      {meal.tags.map(tag => (
                        <span 
                          key={tag}
                          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${
                            tag.includes('Protein') || tag.includes('Carb')
                              ? 'bg-secondary-container/30 text-on-secondary-container'
                              : 'bg-surface-container-high text-on-surface-variant'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Dinner Card */}
              <div className="bg-surface-container-lowest border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center p-8 text-center group cursor-pointer hover:border-primary hover:bg-surface transition-all">
                <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-on-primary">
                    restaurant_menu
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-on-surface mb-1">Next: Dinner</h4>
                <p className="text-base text-on-surface-variant mb-6">
                  Plan your dinner to reach your macros for today.
                </p>
                <button className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Choose Recipe
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container w-full relative mt-24">
        <div className="w-full py-12 px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
          <div className="md:col-span-1">
            <span className="text-2xl font-bold text-primary block mb-4">DietPlanner</span>
            <p className="text-base text-on-surface-variant">
              © 2024 DietPlanner. Your professional nutrition companion.
            </p>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-sm font-bold text-primary uppercase tracking-widest">Resources</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-on-surface-variant hover:text-primary hover:underline transition-all duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-on-surface-variant hover:text-primary hover:underline transition-all duration-200">
                  Community
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-sm font-bold text-primary uppercase tracking-widest">Legal</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-on-surface-variant hover:text-primary hover:underline transition-all duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-xs text-on-surface-variant hover:text-primary hover:underline transition-all duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-sm font-bold text-primary uppercase tracking-widest">Contact</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-xs text-on-surface-variant hover:text-primary hover:underline transition-all duration-200">
                  Contact Us
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
                  share
                </span>
                <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
                  mail
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;