# TopTop
*TopTop* is a working website for computer recommendations. The purpose of the website is to provide non-technical users with a recommended list of laptops and/or desktops. When interacting with the website’s workflow system, a series of questions will be displayed to receive inputs for an API call, returning the top results based on user queries. Each result will be formatted in a card layout for users to 1) click on for more information and 2) be directed to the seller’s website. 

# Motivation
*TopTop*’s primary audience is for non-technical users who have little to zero technical expertise and are in need of a computer. Current website filters have options for processor models, RAM, and storage space -- jargon that non-technical users are unaware of or do not care for. To create a pleasurable search experience, we want to use simple, familiar vocabulary (e.g. price, condition, brand) to ultimately provide recommendations for our target user group. 

# Tech/Framework used
**Built with**:
- [Flask](http://flask.palletsprojects.com/en/1.1.x/)
- [Best Buy API](https://bestbuyapis.github.io/api-documentation/)

# Features
- **Landing page.** The landing page will “warm up” users to the computer recommendation service TopTop provides. It will provide enough information to inform its non-technical users about how TopTop caters to this niche market. 
- **Next and previous button.** The TopTop web application will provide user control and freedom to allow users to make sudden changes to their search options. As a result, users will not have to reload or restart the entire application. 
- **Page progress bar.** The TopTop web application will ensure users know the status of their progress as they select filter options. It is important that this visualization is included to keep users informed of their progress. 
- **Price range filter.** This filter is one of two mandatory filters that users will input information to generate a list of results. Users can either choose a max range, min range, or both. 
- **Additional feature search bar.** The additional feature search bar will allow users to input keywords - such as “backlit keyboard,”  “school,” or “work” - to filter laptops and/or desktops that best fit the user’s needs. This feature allows advanced or technical users to input information regarding processor model, RAM, condition, and more. 
- **Loading page.** The loading page will keep users entertained while the web application takes time for all the content to load. 
- **Sort by feature.** Users will have the option of sorting the results page by brand name, rating, price, or other categories they searched for with the additional features search bar. 
- **Links.** All links on the results page will connect users to the seller website for users to purchase. All these links will be tested on a weekly basis. Clicking on specific links will bring users to a designated part of the seller’s webpage, such as star/review ratings. 
- **Results page.** The results page will display all laptops and/or desktops that fit the user’s filter options in a list format. This page will include an image, the brand name, star rating, and price for each product listed. 
- **Scalability.** The web application must be available 24 hours a day, 7 days a week, with two hours dedicated per week to maintain the system. 
- **Usability.** The web application will have a user-friendly, aesthetic, and minimalist user interface to allow non-technical users to easily navigate and find suitable laptops and/or desktops. 

# Installation
First, [install pip](https://pip.pypa.io/en/stable/installing/#upgrading-pip). Then do the following to run the backend in a virtual environment:

```
pip install -U pip                  # upgrades pip to latest
pip install virtualenv              # installs virtual environment tool
virtualenv venv                     # generates a virtual environment for Python
source venv/bin/activate            # activates the virtual environment
pip install -r requirements.txt     # installs Python dependencies
python app.py                       # runs the Flask app
```

To deactivate the virtual environment, enter `deactivate`.

# How to Use
TODO.

# Credits
**Frontend** – [Ashley Zhou](https://github.com/toomanyashleys), [Ting Ting Huang](https://github.com/TingTH), [Dachelle Alo](https://github.com/dachellealo)

**Backend** – [J.P. Nguyen](https://github.com/jp-nguyen), [Rishi Shah](https://github.com/rishisshah)

This was made for IN4MATX 151 at University of California, Irvine, during Fall Quarter 2019.