# DietPlanner Dashboard - React Implementation

## Overview
This is a professional diet and nutrition tracking dashboard built with React. The application features a modern, responsive design with comprehensive nutrition tracking capabilities.

## Features Implemented

### 1. **Navigation Bar**
- Sticky top navigation with backdrop blur effect
- Active link highlighting
- Search functionality
- Sign-in button
- Responsive design (links hide on mobile)

### 2. **Dashboard Components**

#### Daily Progress Card
- **Calorie Tracker**: Visual circular progress indicator showing consumed vs target calories
- **Macro Breakdown**: Progress bars for Protein, Carbs, and Fats with real-time percentages
- **Dynamic Calculations**: Automatically calculates remaining calories and percentages

#### Hydration Widget
- Water intake tracking (2.0L daily goal)
- Visual glass indicators (6 glasses)
- Interactive "Add 250ml" button
- Real-time percentage display in welcome message
- Animated fill effect when adding water

#### Tip of the Day
- Educational nutrition tips
- Clean, card-based design
- Left border accent for visual hierarchy

#### Meal Schedule
- Grid layout for breakfast, lunch, and dinner
- Meal cards with images, calories, and protein info
- Tags for meal characteristics (High Protein, Quick Fix, etc.)
- "Add Dinner" placeholder card with call-to-action
- Hover effects for better UX

### 3. **State Management**
All data is managed with React hooks (useState):
- User name
- Calories consumed/target
- Water consumed/target
- Macronutrients (protein, carbs, fats)
- Active navigation item
- Meal data

### 4. **Interactive Features**
- **Water Addition**: Click "Add 250ml" to increment water intake
- **Navigation**: Click navigation links to see active state
- **Responsive Layout**: Adapts to mobile, tablet, and desktop
- **Hover Effects**: Cards lift on hover for visual feedback
- **Progress Animations**: Smooth transitions for all progress indicators

### 5. **Design System**
Comprehensive CSS custom properties for:
- Color palette (primary, secondary, surface colors)
- Spacing system (xs, sm, md, lg, xl, 2xl)
- Border radius values
- Shadow levels
- Typography scales

## Technology Stack
- **React 19.2.6**: Latest React with hooks
- **Vite**: Fast build tool and dev server
- **CSS3**: Modern CSS with custom properties
- **SVG**: For circular progress indicators

## File Structure
```
frontend/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Complete styling
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles
├── public/
│   └── icons.svg        # Icon assets
└── package.json         # Dependencies
```

## How to Run

1. **Install Dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - Navigate to `http://localhost:5173`

## Key State Variables

```javascript
- userName: 'Alex'              // User's display name
- caloriesConsumed: 1540        // Current calories
- caloriesTarget: 2200          // Daily calorie goal
- waterConsumed: 1.4            // Liters consumed
- waterTarget: 2.0              // Daily water goal
- macros: {                     // Macro nutrients
    protein: { current, target },
    carbs: { current, target },
    fats: { current, target }
  }
- meals: []                     // Array of meal objects
- activeNavItem: 'Dashboard'    // Current nav selection
```

## Customization Guide

### Change User Data
Edit initial state values in `App.jsx`:
```javascript
const [userName] = useState('Your Name');
const [caloriesConsumed, setCaloriesConsumed] = useState(1000);
```

### Add More Meals
Add objects to the meals array:
```javascript
{
  id: 3,
  type: 'Dinner',
  time: '19:00',
  name: 'Salmon with Vegetables',
  calories: 550,
  protein: 45,
  image: 'image-url',
  tags: ['High Protein', 'Omega-3']
}
```

### Modify Colors
Change CSS custom properties in `:root`:
```css
--color-primary: #2d6a4f;  /* Your primary color */
--color-secondary: #2b694d; /* Your secondary color */
```

## Future Enhancements

### Backend Integration (MERN)
1. **MongoDB Models**:
   - User profile
   - Daily nutrition logs
   - Meal database
   - Custom recipes

2. **Express API Endpoints**:
   - `POST /api/meals` - Add meal
   - `GET /api/nutrition/:userId/:date` - Get daily stats
   - `PUT /api/water/:userId` - Update water intake
   - `GET /api/recipes` - Fetch recipes

3. **Authentication**:
   - JWT tokens
   - User registration/login
   - Protected routes

4. **Features to Add**:
   - Historical data visualization
   - Weekly/monthly reports
   - Custom meal planning
   - Recipe recommendations
   - Barcode scanner for food items
   - Social features (share progress)
   - AI-powered nutrition suggestions

## Responsive Breakpoints
- **Desktop**: > 1024px (Full layout)
- **Tablet**: 768px - 1024px (Adjusted grid)
- **Mobile**: < 768px (Stacked layout)

## Performance Features
- CSS animations for smooth transitions
- Lazy loading ready
- Optimized re-renders with React hooks
- Efficient state management
- Minimal bundle size

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Credits
Design inspired by modern Material Design principles with a focus on nutrition tracking and user wellness.

---

**Note**: This is a frontend-only implementation. To make it a full MERN stack application, you'll need to:
1. Set up MongoDB database
2. Create Express.js backend API
3. Implement authentication
4. Connect frontend to backend via REST API or GraphQL
5. Add data persistence and user management
