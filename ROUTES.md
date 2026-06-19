# test1_business_logic_github_android_validation — Screens & Navigation

## How to run
cd /home/hewlett/projects/frontendX_backend_merged/frontend_runs/run_e9848e9b_20260619_110747/project
npm install && npx expo start

## Screens
| Screen | File | Description |
|--------|------|-------------|
| Login | src/screens/LoginScreen.tsx | Authentication entry with email/password and Google sign-in. |
| Home | src/screens/HomeScreen.tsx | Hero, collaboration cards, features, testimonials, CTA. |
| Features | src/screens/FeaturesScreen.tsx | Feature highlights with analytics, community, automation cards. |
| Pricing | src/screens/PricingScreen.tsx | Pricing plans with highlighted professional tier. |
| Testimonials | src/screens/TestimonialsScreen.tsx | Swipeable testimonial cards with pagination. |
| Resources | src/screens/ResourcesScreen.tsx | Resource library highlights. |
| Company | src/screens/CompanyScreen.tsx | Company values and mission highlights. |
| Contact | src/screens/ContactScreen.tsx | Contact form with validation and success state. |
| Detail | src/screens/DetailScreen.tsx | Collaboration detail view for selected card. |
| NotFound | src/screens/NotFoundScreen.tsx | Fallback screen with return home action. |

## Navigation map
- Login -> MainDrawer (login or Google sign-in)
- Home -> Detail (tap collaboration card, passes id)
- Detail -> Pricing (primary CTA)
- Pricing -> Contact (choose plan)
- Drawer items -> corresponding screen (Home, Features, Pricing, Testimonials, Resources, Company, Contact, Login)
- NotFound -> MainDrawer (go home)

## Shared components
- CollaborationCard.tsx — image-based collaboration highlight card.
- FeatureCard.tsx — icon feature card with title and description.
- HeaderBar.tsx — sticky header with logo, menu, or back button.
- InputField.tsx — labeled text input with error support.
- PricingCard.tsx — pricing plan card with features and CTA.
- PrimaryButton.tsx — animated CTA button for primary/secondary actions.
- ResourceCard.tsx — resource list card.
- SectionHeader.tsx — section title + subtitle.
- TestimonialCard.tsx — testimonial card with avatar and stars.

## Design tokens
- primaryYellow
- secondaryYellow
- lightYellow
- primaryOrange
- secondaryOrange
- lightOrange
- primaryBlack
- secondaryBlack
- silver
- lightSilver
- darkSilver
- background
- cardBackground
- border
- textPrimary
- textSecondary
- success
- error
