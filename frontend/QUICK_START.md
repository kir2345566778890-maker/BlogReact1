# 🚀 Quick Start Guide - DietPlanner Dashboard

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

## Installation & Running

### 1. Navigate to Frontend Directory
```bash
cd "c:\Users\rakes\OneDrive\Desktop\full stack\BlogReact1\frontend"
```

### 2. Install Dependencies (if not already done)
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Browser
```
http://localhost:5173
```

You should see the DietPlanner Dashboard load with:
- Welcome message for "Alex"
- Calorie tracker showing 1540/2200 kcal
- Water intake at 70% (1.4L/2.0L)
- Macro breakdown (Protein, Carbs, Fats)
- Breakfast and Lunch meal cards

## 🎮 Interactive Features to Test

### 1. Add Water
- Click the **"Add 250ml"** button in the hydration widget
- Watch the water glass indicators fill up
- See the percentage update in the welcome header
- Try clicking multiple times (max 6 glasses = 2.0L)

### 2. Navigation
- Click different navigation links (Dashboard, Recipes, Tips, Community)
- Notice the active link highlighting changes
- See the underline animation

### 3. Hover Effects
- Hover over meal cards to see lift effect
- Hover over navigation links
- Hover over buttons to see scale animations

### 4. Responsive Design
- Resize your browser window
- Watch the layout adapt to different screen sizes
- Try mobile view (F12 → Toggle Device Toolbar in Chrome)

## 📱 Testing on Different Devices

### Desktop View (> 1024px)
- Full 12-column grid layout
- Navigation links visible
- Search box visible
- 3-column meal grid

### Tablet View (768px - 1024px)
- Adjusted grid layout
- Navigation links hidden
- Search box hidden
- 2-column meal grid

### Mobile View (< 768px)
- Single column layout
- Stacked cards
- Full-width elements
- Touch-friendly buttons

## 🔍 What to Look For

### Visual Elements
✅ Clean, professional design
✅ Consistent green color scheme (#2d6a4f)
✅ Smooth animations and transitions
✅ Proper spacing and alignment
✅ Readable typography (Open Sans font)

### Interactive Elements
✅ Water button increments counter
✅ Navigation links change active state
✅ Progress bars show correct percentages
✅ Hover effects work smoothly
✅ All images load correctly

### Data Display
✅ Calorie tracker: 1540 of 2200 (70%)
✅ Water intake: 1.4L of 2.0L (70%)
✅ Protein: 95g of 150g (63%)
✅ Carbs: 180g of 250g (72%)
✅ Fats: 42g of 60g (70%)
✅ Remaining calories: 660 kcal

## 🎨 Customization Quick Tips

### Change User Name
**File**: `App.jsx`
**Line**: ~6
```javascript
const [userName] = useState('Your Name Here');
```

### Adjust Calorie Goals
**File**: `App.jsx`
**Lines**: ~7-8
```javascript
const [caloriesConsumed, setCaloriesConsumed] = useState(1200);
const [caloriesTarget] = useState(2500);
```

### Update Water Intake
**File**: `App.jsx`
**Lines**: ~9-10
```javascript
const [waterConsumed, setWaterConsumed] = useState(0.5);
const [waterTarget] = useState(2.0);
```

### Change Primary Color
**File**: `App.css`
**Line**: ~3
```css
--color-primary: #2d6a4f; /* Your color here */
```

## 🛠️ Development Commands

### Start Dev Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Run Linter
```bash
npm run lint
```

## 📂 Project Structure
```
frontend/
├── src/
│   ├── App.jsx          ← Main component
│   ├── App.css          ← All styles
│   ├── main.jsx         ← Entry point
│   └── index.css        ← Global styles
├── public/
│   └── favicon.svg
├── index.html           ← HTML template
└── package.json         ← Dependencies
```

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy:
```bash
# Vite will automatically suggest an alternative port
# Or kill the process and restart
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Loading
```bash
# Clear browser cache
# Hard refresh: Ctrl + Shift + R (Windows/Linux)
# Or: Cmd + Shift + R (Mac)
```

### Images Not Showing
- Check internet connection (images are from external URLs)
- Open browser console (F12) to see any errors
- Verify image URLs are accessible

## 📊 Expected Console Output

When you run `npm run dev`, you should see:
```
VITE v8.0.12  ready in [time] ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h to show help
```

## ✅ Success Checklist

Before considering the app working correctly:
- [ ] Dev server starts without errors
- [ ] Browser opens to localhost:5173
- [ ] Page loads completely
- [ ] No console errors (F12 to check)
- [ ] All sections are visible
- [ ] Images load
- [ ] Navigation works
- [ ] Water button adds water
- [ ] Progress circles display correctly
- [ ] Hover effects work
- [ ] Responsive design works

## 🎯 Next Steps

Once you confirm everything works:

1. **Test all features** thoroughly
2. **Try different screen sizes**
3. **Customize the data** to your preferences
4. **Read the documentation**:
   - DIETPLANNER_README.md (features)
   - COMPONENT_GUIDE.md (technical details)
   - IMPLEMENTATION_SUMMARY.md (overview)

5. **Plan backend integration** (if building full MERN stack)

## 💡 Pro Tips

### For Development
- Keep browser DevTools open (F12)
- Use React DevTools extension
- Watch the Network tab for issues
- Check Console for errors

### For Testing
- Test on real devices if possible
- Try different browsers
- Test with slow network (DevTools → Network → Throttling)
- Check accessibility (DevTools → Lighthouse)

### For Learning
- Read the commented code in App.jsx
- Modify values and see changes
- Experiment with colors and spacing
- Try adding new features

## 📞 Need Help?

### Documentation Files
1. **QUICK_START.md** ← You are here
2. **DIETPLANNER_README.md** - Feature documentation
3. **COMPONENT_GUIDE.md** - Technical guide
4. **IMPLEMENTATION_SUMMARY.md** - Project overview

### Common Questions

**Q: Why isn't my data persisting?**
A: This is frontend-only. Data resets on refresh. Add a backend to persist data.

**Q: How do I add more meals?**
A: Edit the `meals` array in App.jsx (around line 13-40).

**Q: Can I change the layout?**
A: Yes! Modify the CSS grid in App.css (`.dashboard-grid` section).

**Q: How do I add a database?**
A: You'll need to set up MongoDB and Express backend. See DIETPLANNER_README.md "Future Enhancements" section.

## 🎉 You're Ready!

Your DietPlanner Dashboard is now fully functional. Enjoy exploring the features and customizing it to your needs!

---

**Happy Coding! 🚀**
