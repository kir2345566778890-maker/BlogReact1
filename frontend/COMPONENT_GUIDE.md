# DietPlanner Component Structure Guide

## Component Hierarchy

```
App (Root Component)
├── Navigation Bar
│   ├── Logo
│   ├── Nav Links (Dashboard, Recipes, Tips, Community)
│   ├── Search Box
│   └── Sign In Button
│
├── Main Content
│   ├── Welcome Header
│   │   ├── Greeting with username
│   │   └── Water progress message
│   │
│   └── Dashboard Grid
│       ├── Daily Progress Card (Large - 8 columns)
│       │   ├── Calorie Meter (Circular Progress)
│       │   └── Macro Breakdown (3 Progress Bars)
│       │
│       ├── Sidebar Cards (4 columns)
│       │   ├── Hydration Card
│       │   │   ├── Water Icon & Badge
│       │   │   ├── Title & Description
│       │   │   ├── Glass Indicators (6)
│       │   │   └── Add Water Button
│       │   │
│       │   └── Tip of the Day Card
│       │       ├── Icon & Label
│       │       ├── Tip Title
│       │       └── Tip Content
│       │
│       └── Meal Schedule (Full Width - 12 columns)
│           ├── Section Header
│           └── Meal Grid
│               ├── Breakfast Card
│               ├── Lunch Card
│               └── Dinner Card (Add Meal)
│
└── Footer
    ├── Brand Info
    ├── Resources Links
    ├── Legal Links
    └── Contact & Social
```

## State Management Flow

### State Variables
```javascript
// User Data
userName → Used in welcome header

// Nutrition Data
caloriesConsumed → Circular progress, calculations
caloriesTarget → Target badge, calculations
macros → Macro breakdown bars

// Hydration Data
waterConsumed → Glass indicators, percentage
waterTarget → Goal display

// UI State
activeNavItem → Navigation highlighting

// Content Data
meals → Meal cards rendering
```

### Event Handlers
```javascript
handleAddWater()
  → Updates waterConsumed state
  → Triggers glass fill animation
  → Updates welcome message percentage

handleNavClick(item)
  → Updates activeNavItem state
  → Changes active link styling
```

## Data Flow Examples

### 1. Adding Water
```
User clicks "Add 250ml" button
  ↓
handleAddWater() fires
  ↓
waterConsumed state updates (+0.25L)
  ↓
React re-renders components:
  - Water glasses (fills next empty glass)
  - Welcome header (updates percentage)
```

### 2. Calorie Display
```
caloriesConsumed & caloriesTarget from state
  ↓
Calculate percentage: (consumed / target) * 100
  ↓
Calculate SVG strokeDashoffset for circle
  ↓
Render circular progress indicator
  ↓
Display remaining calories
```

### 3. Macro Breakdown
```
macros object from state
  ↓
Object.entries() to iterate
  ↓
For each macro:
  - Calculate percentage
  - Set progress bar width
  - Display current/target values
```

## Props Structure (for future componentization)

### When you split into smaller components:

```javascript
// NavBar Component
<NavBar 
  activeItem={activeNavItem}
  onNavClick={handleNavClick}
/>

// CalorieMeter Component
<CalorieMeter 
  consumed={caloriesConsumed}
  target={caloriesTarget}
/>

// MacroBreakdown Component
<MacroBreakdown 
  macros={macros}
/>

// HydrationCard Component
<HydrationCard 
  waterConsumed={waterConsumed}
  waterTarget={waterTarget}
  onAddWater={handleAddWater}
/>

// MealCard Component
<MealCard 
  meal={mealData}
/>
```

## CSS Class Naming Convention

### BEM-inspired Structure
```
Component Name → Class Name

diet-planner-app        (Root)
  ├── top-nav
  │   ├── nav-container
  │   ├── nav-left
  │   ├── nav-links
  │   ├── nav-link
  │   └── nav-right
  │
  ├── main-content
  │   ├── welcome-header
  │   ├── dashboard-grid
  │   │   ├── card
  │   │   ├── card-large
  │   │   ├── card-hydration
  │   │   └── card-tip
  │   │
  │   ├── meal-schedule
  │   │   ├── meal-grid
  │   │   ├── meal-card
  │   │   ├── meal-image
  │   │   └── meal-content
  │
  └── footer
      ├── footer-content
      ├── footer-brand
      └── footer-section
```

## Key Calculations

### 1. Calorie Progress Circle
```javascript
const radius = 40;
const circumference = 2 * Math.PI * radius;  // 251.2
const percentage = (consumed / target) * 100;
const offset = circumference - (percentage / 100) * circumference;
```

### 2. Water Glasses
```javascript
const totalGlasses = 6;
const filledGlasses = Math.floor((consumed / target) * totalGlasses);
// Maps to array and conditionally applies 'filled' or 'empty' class
```

### 3. Macro Progress
```javascript
const percentage = (current / target) * 100;
// Applied as inline style: width: `${percentage}%`
```

## Styling Approach

### CSS Custom Properties (Design Tokens)
```css
:root {
  --color-primary: #2d6a4f;
  --spacing-lg: 24px;
  --radius-full: 9999px;
}

/* Usage */
.button {
  background: var(--color-primary);
  padding: var(--spacing-lg);
  border-radius: var(--radius-full);
}
```

### Responsive Grid
```css
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.card-large {
  grid-column: span 8;  /* 8 out of 12 columns */
}

.sidebar-cards {
  grid-column: span 4;  /* 4 out of 12 columns */
}

@media (max-width: 1024px) {
  .card-large {
    grid-column: span 12;  /* Full width on tablet/mobile */
  }
}
```

## Animation Classes

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.welcome-header {
  animation: fadeIn 0.7s ease;
}
```

## Interaction States

### Hover Effects
```css
.meal-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}
```

### Active States
```css
.nav-link.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}
```

### Button States
```css
.btn-add-water:hover {
  transform: scale(0.98);
}
```

## Future Component Extraction

### Recommended Split
```
components/
├── layout/
│   ├── NavBar.jsx
│   ├── Footer.jsx
│   └── MainLayout.jsx
│
├── dashboard/
│   ├── WelcomeHeader.jsx
│   ├── CalorieTracker.jsx
│   ├── MacroBreakdown.jsx
│   ├── HydrationWidget.jsx
│   ├── TipCard.jsx
│   └── MealSchedule.jsx
│
├── meals/
│   ├── MealCard.jsx
│   └── AddMealCard.jsx
│
└── ui/
    ├── Button.jsx
    ├── ProgressBar.jsx
    ├── CircularProgress.jsx
    └── Badge.jsx
```

## Testing Checklist

### Functional Testing
- [ ] Add water button increments by 0.25L
- [ ] Water glasses fill correctly
- [ ] Navigation links highlight on click
- [ ] All progress bars display correctly
- [ ] Calculations are accurate
- [ ] Responsive layout works on mobile

### Visual Testing
- [ ] Colors match design system
- [ ] Typography is consistent
- [ ] Spacing is uniform
- [ ] Hover effects work smoothly
- [ ] Images load correctly
- [ ] Icons display properly

### Performance
- [ ] No unnecessary re-renders
- [ ] Smooth animations
- [ ] Fast initial load
- [ ] Optimized images

---

This guide provides a comprehensive overview of the component structure and will be helpful when extending the application or refactoring into smaller components.
