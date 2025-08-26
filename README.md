![Angular](https://img.shields.io/badge/angular-20.0-red?logo=angular)
![Node](https://img.shields.io/badge/node-20.x-green?logo=node.js)
![Issues](https://img.shields.io/github/issues/Deepak-nitt/Assignment2)




## PORTFOLIO-DASHBOARD
This Project runs the portfolio dashboard frontend application using Angular.It allows user to add portfolio entries(Name,Skills,Project Title,Project Description) and displays them as cards in a flat alphabetical order. This app uses the LocalStorage for the persistence and provides search functionality for the cards.



- **Frontend** (Angular): `http://localhost:4200`
## Tech stack
- Angular 15+
- TypeScript
- TailWindCSS

## Prerequisites
- Node.js v18+
- npm/yarn
- Angular CLI( npm install -g @angular/cli)
- internet access to install dependencies

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
## Quick Start
1. **Clone the Repository**
```bash
git clone https://github.com/Deepak-nitt/Assignment2
cd portfolio-dashboard
```
2. **Install the dependencies**
``` bash
npm install
```

3. **Run the Project**
```bash
ng serve
```
4. **Open the app**
``` bash
http://localhost:4200
```

## Core Features
- Header
- Portfolio form
- Dashbord(Flat Cards)
- Project Description
- Ordering based on Name , CreatedAt
- Search (Conditional)

## Common Commands

```bash
# for making a component
ng g c <component-name>


# for making a service
ng g s <service-name>


# for making a service
ng g s <service-name>


# for making a service
ng g s <service-name>

# for running the project
ng serve

```
## Contributing
1. Fork repository
2. Create feature branch: `git checkout -b feature/YourFeature`
3. Make changes
4. Commit: `git commit -m "Add feature"`
5. Push: `git push origin feature/YourFeature`
6. Open Pull Request







