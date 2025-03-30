// Import our custom CSS
import './style.css'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css'

// You can also import individual Bootstrap components as needed
// For example:
// import { Modal, Tooltip } from 'bootstrap'

// Initialize tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Initialize popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Log that Bootstrap has been initialized
console.log('Bootstrap has been initialized')
