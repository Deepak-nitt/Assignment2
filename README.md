1. Clone the Repository
```bash
git clone https://github.com/Deepak-nitt/Assignment2
cd portfolio-dashboard
```
2. Install the dependencies
``` bash
npm install
```

3. Run the Project
```bash
ng serve
```

## Project Structure
```
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   │
│   ├── app/
│   │   ├── app.config.ts
│   │   ├── app.html
│   │   ├── app.css
│   │   └── app.ts
│   │
│   ├── core/
│   │   ├── services/
│   │   │   └── portfolio.services.ts               # services for the portfolio
│   │   ├── utils/
│   │   │   ├── form-errors.utils.ts                # error logic 
│   │   │   ├── ordering-searching.utils.ts         # ordering of entries and searching logic
│   │   │   └── validation.utils.ts                 # form validation logic
│   │
│   ├── features/
│   │   ├── dashboard/
│   │   │   ├── dashboard.ts                       # dashboard component logic
│   │   │   ├── dashboard.html                     # dashboard template 
│   │   │   ├── dashboard.css
│   │   │   └── dashboard.spec.ts
│   │   │
│   │   └── portfolio/
│   │       ├── portfolio-form.ts                  # portfolio component logic
│   │       ├── portfolio-form.html                # portfolio form creation 
│   │       ├── portfolio-form.css
│   │       ├── portfolio-form.spec.ts
│   │       └── models/
│   │           └── portfolio.model.ts            # models for form 
│   │
│   ├── shared/
│   │   ├── header/
│   │   │   ├── header.ts                         # header component logic
│   │   │   ├── header.html                       # header box template
│   │   │   ├── header.css
│   │   │   └── header.spec.ts
│   │   │
│   │   └── search-box/
│   │       ├── search-box.ts                     # search-box component logic
│   │       ├── search-box.html                   # search-box template

```
## Features

```
Add porfolios
Form Validation
Dashbord view
ordering of cards
Searching via name , skills and projects
```
