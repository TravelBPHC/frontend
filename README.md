# TravelBPHC - Project Story

## Inspiration

In today's modern era, we have a lot of convenience at hand. So much so, that we don't stop to even consider a more eco-friendly way of doing something unless it's being shoved into our face and we're constantly reminded of the fact that there is a better way. I suppose guilty conscience has to come into play at some point, and any moderately sensible person would take the smart decision of choosing the more environmentally friendly option ultimately.

How does this tie to our project? For that we'll have to understand Carbon emmissions. Carbon emissions are a significant global issue due to their contribution to climate change. They primarily come from human activities, including burning fossil fuels for energy and transportation, deforestation, and industrial processes. These emissions release greenhouse gases into the atmosphere, such as carbon dioxide, which trap heat and contribute to the greenhouse effect, leading to a rise in global temperatures. Nowadays, the common man majorly contributes to global warming by not being mindful about their travels. We should ideally try to take public transport or carpool with others, but we don't because it's not convenient to us.

The people of our college are no different. Whenever we are trying to escape the monotonous life of campus, and want a small retreat into the city; probably a nearby restaurant or an amuseent park, we tend to not consider the impact that our travel is going to have on the environment. This behaviour is especially accentuated by the hot weather of the city, and the distance of our campus from the main city. Nobody wants to commute using public transport because of the hassle of figuring out the timings of the buses, knowing where to switch and just the fact that it takes more time. Apart from this, carpooling would be something that would help reduce emissions, but the issue with this is the lack of a proper platform to see who is travelling, when, and where.

So we decided to make this website, we simply call it TravelBPHC, and it aims to provide the one stop destination for all your travels to and from campus, in an eco-friendly way :)

## What it does

1. One stop destination for knowing about the travel plans of everyone around you. Send/accept requests easily via mail, and travel together without any hassle.

2. We provide contact and vehicle details of some vendors that operate close to our campus, so that they get here quickly. We also provide the carbon emissions associated with every vehicle, tailored to your source and destination selection so that you know the impact your travel is having on the environment.

3. We understand that people don't want to go to multiple sources trying to find authentic information about buses, or enquire about auto-rickshaw prices standing out in the heat. So we provide a list of all buses connecting our campus to the city, along with their timings. If you're not going very far, we have auto drivers' contact details as well.

## The stack

- Backend: Django REST Framework (for creating the API), Gmail SMTP Server (to send mails), PostgreSQL (database), Supabase (for hosting the database), DigitalOcean (for hosting the API)

- Frontend: ReactJS, Mantine UI

## Challenges we ran into

- Since this was the first time we were trying to implement OAuth, we had to figure out the flow for the same. While it was simple enough on the frontend, designing the backend was a bit challenging as Django works really well with password based authentication. So we ended up creating a random secret key for the project, and hashed it with some personal information about the user that we got from Google. This makes sure that the password is truly random, but at the same time includes some information specific to the user and it can be deciphered only by us.

- Another thing that we were doing for the first time in this project was dealing with maps. Earlier, Google Maps used to be a free to use API and pretty much everyone was making their projects with it. However, recently they've introduced a price cap, thus we had to begin a search for an equally efficient and latency free API. After hours of scouring the internet, we finally found Geoapify. It had everything that we were looking for, and we decided that it would work for out current purposes.

## Accomplishments that we're proud of

1. Implemented a fairly complicated mailing mechanism to send, accept and reject travel along requests with very low latency

2. Hassle free OAuth based authentication mechanism

3. Implemented Maps

4. Optimised state management using UseContext

5. Sleek, clean and responsive UI

## What's next for TravelBPHC

1. Connecting with Ola and Uber API to provide fare estimates from both on the select vehicle page and letting a user book a ride from there. We have submitted an application in the Uber developer portal and will be working on this when it gets approved

2. Implement WebSockets, so that data can be updated in real time as people reject/accept requests and make new posts

3. Adding real time browser notifications for the webapp along with sending mails
