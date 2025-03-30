# Heading Font Sizes in Tech Book Club Landing Page

This document provides a comprehensive list of all heading elements (h1 through h6) and their font sizes used throughout the project.

## Default Heading Sizes

| Heading Element | Font Size | Rem Value | Pixel Equivalent | Line Height | Letter Spacing |
|-----------------|-----------|-----------|------------------|-------------|----------------|
| h1, h2, h4, h6  | 3.125rem  | 3.125rem  | 50px             | 130%        | -2px           |
| h3, .h3         | 1.25rem   | 1.25rem   | 20px             | 130%        | -1px           |
| h5, .h5         | 1.75rem   | 1.75rem   | 28px             | 130%        | -1px           |

## Component-Specific Heading Sizes

### Hero Section
| Element         | Font Size | Rem Value | Pixel Equivalent | Additional Styling |
|-----------------|-----------|-----------|------------------|-------------------|
| .hero-title     | 3.5rem    | 3.5rem    | 56px             | line-height: 1.2  |
| .hero-subtitle  | 1.25rem   | 1.25rem   | 20px             | color: var(--gray) |
| .hero-section h1| 3.5rem    | 3.5rem    | 56px             | font-weight: 800, gradient background |

### Section Titles
| Element         | Font Size | Rem Value | Pixel Equivalent | Additional Styling |
|-----------------|-----------|-----------|------------------|-------------------|
| .section-title  | 2.5rem    | 2.5rem    | 40px             | Underline effect with ::after pseudo-element |

### Feature Cards
| Element         | Font Size | Rem Value | Pixel Equivalent | Additional Styling |
|-----------------|-----------|-----------|------------------|-------------------|
| .feature-title  | 1.25rem   | 1.25rem   | 20px             | margin-bottom: var(--spacing-sm) |

### Journey Items
| Element               | Font Size | Rem Value | Pixel Equivalent | Additional Styling |
|----------------------|-----------|-----------|------------------|-------------------|
| .journey-item .h5    | 1.25rem   | 1.25rem   | 20px             | !important flag applied |

### Testimonials
| Element               | Font Size | Rem Value | Pixel Equivalent | Additional Styling |
|----------------------|-----------|-----------|------------------|-------------------|
| .testimonial-section .lead | 2.125rem | 2.125rem | 34px           | letter-spacing: -1px, font-weight: 600 |
| .testimonial-author  | 1.25rem   | 1.25rem   | 20px             | line-height: 140%, letter-spacing: -0.5px |

### Footer
| Element         | Font Size | Rem Value | Pixel Equivalent | Additional Styling |
|-----------------|-----------|-----------|------------------|-------------------|
| .footer-heading | Not specified | Not specified | Not specified | font-weight: 600 |

### Tech Text
| Element         | Font Size | Rem Value | Pixel Equivalent | Additional Styling |
|-----------------|-----------|-----------|------------------|-------------------|
| h2.tech-text    | Not specified | Not specified | Not specified | font-weight: 700, letter-spacing: -0.02em |

## Media Query Variations

### Mobile (max-width: 768px)
| Element         | Font Size | Rem Value | Pixel Equivalent | Changes from Desktop |
|-----------------|-----------|-----------|------------------|----------------------|
| .hero-section h1| 2.5rem    | 2.5rem    | 40px             | Reduced from 3.5rem  |
| h3, .h3         | 1.25rem   | 1.25rem   | 20px             | No change (explicitly maintained) |
| h5, .h5         | 1.75rem   | 1.75rem   | 28px             | No change (explicitly maintained) |

## Font Family Information

All headings use these font families:

- **Primary Headings (h1, h2, h4, h6, h5)**: `var(--font-mono)` - Martian Mono, font-weight: 600
- **Special Headings (.tech-text)**: `var(--tbc-font-mono)` - Martian Mono with special letter spacing
- **Testimonial Headings**: Mix of font-mono for .lead and Inter for .testimonial-author

## Additional Notes

1. Multiple heading elements (h1, h2, h4, h6) share the same styling, suggesting a consistent visual hierarchy
2. Special component-specific headings often override the default heading sizes
3. The project maintains consistent heading sizes on mobile for h3 and h5 (explicitly stated in media queries)
4. Many headings use negative letter spacing for a tighter, more modern look
5. The hero section uses the largest heading size (3.5rem/56px)

