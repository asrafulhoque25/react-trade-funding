/* eslint-disable react-refresh/only-export-components */
import Button from './components/buttons/Button';
import aboutfeature1 from '/assets/img/aboutfeature1.svg';
import aboutfeature2 from '/assets/img/aboutfeature2.svg';
import aboutfeature3 from '/assets/img/aboutfeature3.svg';
import aboutfeature4 from '/assets/img/aboutfeature4.svg';
import featuredImg1 from '/assets/img/featuredImg1.png';
import featuredImg2 from '/assets/img/featuredImg2.png';
import featuredImg3 from '/assets/img/featuredImg3.png';
import featuredImg4 from '/assets/img/featuredImg4.png';

import partnerFeature1 from '/assets/img/partner-feature1.png';
import partnerFeature2 from '/assets/img/partner-feature2.png';
import partnerFeature3 from '/assets/img/partner-feature3.png';
import partnerFeature4 from '/assets/img/partner-feature4.png';


import blFeatureImg1 from '/assets/img/blFeatureImg1.png';
import blFeatureImg2 from '/assets/img/blFeatureImg2.png';
import blFeatureImg3 from '/assets/img/blFeatureImg3.png';
import blFeatureImg4 from '/assets/img/blFeatureImg4.png';
import blFeatureImg5 from '/assets/img/blFeatureImg5.png';
import blFeatureImg6 from '/assets/img/blFeatureImg6.png';
import blFeatureImg7 from '/assets/img/blFeatureImg7.png';
import blFeatureImg8 from '/assets/img/blFeatureImg8.png';




import business1 from '/assets/img/business1.svg';
import business2 from '/assets/img/business2.svg';
import business3 from '/assets/img/business3.svg';
import business4 from '/assets/img/business4.svg';
import business5 from '/assets/img/business5.svg';
import business6 from '/assets/img/business6.svg';
import business7 from '/assets/img/business7.svg';
import business8 from '/assets/img/business8.svg';



export const homeFeatureData = [
  {
    id: 1,
    FeatureImg: featuredImg1,
    featuredTitle: " Understand business profile ",
    featuredIntro: "We invest time into understanding your business. Including your immediate requirements, goals, structure and the financial service products you useto run your business."
  },
  {
    id: 2,
    FeatureImg: featuredImg2,
    featuredTitle: "Match to the right product",
    featuredIntro: "Once we have a clear understanding of your objectives, we run a process to match you with the right products that are fit for purpose for your business."
  },
  {
    id: 3,
    FeatureImg: featuredImg3,
    featuredTitle: "Onboarding",
    featuredIntro: "We are here to keep the process simple. Whether it be helping you quickly access a new business card or setting you up with digital accounts to save costs on your payment processing, we are here to keep it simple."
  },
  {
    id: 4,
    FeatureImg: featuredImg4,
    featuredTitle: "With you on the journey! ",
    featuredIntro: "Continuous business monitoring unlike most providers who will give you a product and never speak with you again, we are with you on the journey. Continuing to explore opportunities where we can support your Growth and cut costs to Save you time and money.",
    btn: <Button />
  },
]


export const aboutFeatureData = [
  {
    id: 1,
    FeatureImg: aboutfeature1,
    featuredTitle: "Act with Integrity",
    featuredIntro: "Integrity is not just a value; it is the bedrock upon which we build our success and reputation. We believe that acting with integrity is the only path to sustainable growth and meaningful relationships with our stakeholders. With an unwavering commitment to ethical conduct, we strive to be transparent, honest, and accountable in all our interactions..integrity is not negotiable—it defines who we are and shapes our journey towards a better future."
  },
  {
    id: 2,
    FeatureImg: aboutfeature2,
    featuredTitle: "Keep it Simple",
    featuredIntro: "Running a business is far from simple. Add the fact that financial service products have always had a stigma for being overly complicated to understand. At Trade Funding, it is within our DNA to keep things simple, from the process to the understanding of each product. Life is hard enough!"
  },
  {
    id: 3,
    FeatureImg: aboutfeature3,
    featuredTitle: "To be Integrated",
    featuredIntro: "Whether you are a customer or partner, we consider how we can become an integrated part of your business, this can be in the way we work together and support your business, to just showing up at the work Christmas party to celebrate a great year. Either way we are here for the long term."
  },
  {
    id: 4,
    FeatureImg: aboutfeature4,
    featuredTitle: "Always Deliver",
    featuredIntro: "Deliver results, deliver on promises, find alternatives, give options, to ensure we are always delivering value to our customers, our partners, our providers and our people. Less talking and more delivering!",

  },
]



export const partnerFeatureData = [
  {
    id: 1,
    FeatureImg: partnerFeature1,
    featuredTitle: "Partner and see the magic",
    featuredIntro: "Partner with one of the worlds most diversified financial services marketplaces for SME businesses and offer your customers  a consolidated financial services platform. Trade Funding has sourced the best products available across lending and payments to drive growth and cut costs in our customer businesses."
  },
  {
    id: 2,
    FeatureImg: partnerFeature2,
    featuredTitle: "Provide a simple process",
    featuredIntro: "Trade Funding delivers a best-in-class experience to partners and customers. With a completely hands off process for you, we take all the work out of solving financial services problems for your customers on your behalf."
  },
  {
    id: 3,
    FeatureImg: partnerFeature3,
    featuredTitle: "To be integrated",
    featuredIntro: "Reach new customers with co-branded materials, and be rewarded for every successful client you refer to Trade Funding."
  },
  {
    id: 4,
    FeatureImg: partnerFeature4,
    featuredTitle: "Grow your business",
    featuredIntro: "Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Id consectetur purus",

  },
]

export const businessLoans = [
  {
    id:1,
    FeatureImg: business1,
    featuredTitle: "Term loans",
    featuredIntro: "You have big plans or just want to consolidate debt and need a larger loan over a longer term. Term loans are great when you have a specific purpose.",
  businessFeatures: [
    {
      title:"Limits",
      amount:"$5,000 to $500,000"
    },
    {
      title:"Term",
      amount:"Up to 44 days interest free"
    },
    {
      title:"Rates",
      amount:"1.5% per month"
    },
    {
      title:"Turn around",
      amount:"Access digital cards same day"
    }
  ]
  },

  {
    id:2,
    FeatureImg: business2,
    featuredTitle: "Line of credit",
    featuredIntro: "For complete cash flow flexibility. Draw down and use funds when needed for any worthwhile business purpose. Don't have an immediate need, get access now and have available to execute on that next opportunity.",
    businessFeatures: [
      {
        title:"Type",
        amount:"Revolving credit facility"
      },
      {
        title:"Term",
        amount:"Repayment schedule up to 24 months"
      },
      {
        title:"Rates",
        amount:"from 9%"
      },
      {
        title:"Turn around",
        amount:"24 hours"
      }
    ]
  },
  {
    id:3,
    FeatureImg: business3,
    featuredTitle: "Receivables management & Invoice finance",
    featuredIntro: "Tired of getting paid late. Chasing customer invoices and waiting for payment can be an exhausting exercise. Get paid today by unlocking your outstanding invoices and don't impact your customers.",
    businessFeatures: [
      {
        title:"Type",
        amount:"Revolving credit facility"
      },
      {
        title:"Term",
        amount:"Customers can pay per their normal timing."
      },
      {
        title:"Rates",
        amount:"from 6% + RBA rate"
      },
      {
        title:"Turn around",
        amount:"24 hours"
      }
    ]
 
  },
  {
    id:4,
    FeatureImg: business4,
    featuredTitle: "Trade term finance",
    featuredIntro: "Increase sales and get paid upfront without the risk of no payment or time wasted chasing payment. Access our Trade term finance product.",
    businessFeatures: [
      {
        title:"Type",
        amount:"Amounts up to $100k"
      },
      {
        title:"Term",
        amount:"up to 44 days interest free"
      },
      {
        title:"Rates",
        amount:"Rates from 1.5% per month"
      },
      {
        title:"Turn around",
        amount:"Auto pre-approvals with transaction history."
      }
    ]
  },
  {
    id:5,
    FeatureImg: business5,
    featuredTitle: "Receivables management & Invoice finance",
    featuredIntro: "Tired of getting paid late. Chasing customer invoices and waiting for payment can be an exhausting exercise. Get paid today by unlocking your outstanding invoices and don't impact your customers.",
    businessFeatures: [
      {
        title:"Type",
        amount:"Revolving credit facility"
      },
      {
        title:"Term",
        amount:"Customers can pay per their normal timing."
      },
      {
        title:"Rates",
        amount:"from 6% + RBA rate"
      },
      {
        title:"Turn around",
        amount:"24 hours"
      }
    ]
  },
  {
    id:6,
    FeatureImg: business6,
    featuredTitle: "Trade term finance",
    featuredIntro: "Increase sales and get paid upfront without the risk of no payment or time wasted chasing payment. Access our Trade term finance product..",
    businessFeatures: [
      {
        title:"Type",
        amount:"Amounts up to $100k"
      },
      {
        title:"Term",
        amount:"up to 44 days interest free"
      },
      {
        title:"Rates",
        amount:"Rates from 1.5% per month"
      },
      {
        title:"Turn around",
        amount:"Auto pre-approvals with transaction history."
      }
    ]
  },
  {
    id:7,
    FeatureImg: business7,
    featuredTitle: "Ecommerce funding",
    featuredIntro: "Increase sales and get paid upfront without the risk of no payment or time wasted chasing payment. Access our Trade term finance product.",
    businessFeatures: [
      {
        title:"Type",
        amount:"Revolving credit facility"
      },
      {
        title:"Term",
        amount:"up to 44 days interest free"
      },
      {
        title:"Rates",
        amount:"from 9% [to be confirmed]"
      },
      {
        title:"Turn around",
        amount:"48 hours"
      }
    ]
  },
  {
    id:8,
    FeatureImg: business5,
    featuredTitle: "Vehicle finance",
    featuredIntro: "Use a fixed term loan for your next vehicle purchase, whether it be for a car, truck, ute or van, we have suitable options for you.",
    businessFeatures: [
      {
        title:"Type",
        amount:"Fixed term"
      },
      {
        title:"Term",
        amount:"up to 7 years"
      },
      {
        title:"Rates",
        amount:"from 6.29%"
      },
      {
        title:"Turn around",
        amount:"24 hours"
      }
    ]
  }
]


export const BusinessLoansFeatureData = [
  {
    id: 1,
    title: "Business cards",
    desc: "Streamline purchases, empower staff with cards and have full control of when and how they spend.",
    img: blFeatureImg1,
    limits: "$5,000 to $500,000",
    term: "Up to 44 days interest free",
    rates: "1.5% per month",
    turnAround: "Access digital cards same day",
  },
  {
    id: 2,
    title: "Business cards",
    desc: "Streamline purchases, empower staff with cards and have full control of when and how they spend.",
    img: blFeatureImg2,
    limits: "$5,000 to $1,000,000",
    term: "Up to 7 years",
    rates: "Rates from 7%",
    turnAround: "As quick as 24 hours",
  },
  {
    id: 3,
    title: "Business cards",
    desc: "Streamline purchases, empower staff with cards and have full control of when and how they spend.",
    img: blFeatureImg3,
    limits: "$5,000 to $1,000,000",
    term: "Up to 3 years",
    rates: "Rates from 9%",
    turnAround: "As quick as 24 hours",
  },
  {
    id: 4,
    title: "Business cards",
    desc: "Streamline purchases, empower staff with cards and have full control of when and how they spend.",
    img: blFeatureImg4,
    limits: "$5,000 to $1,000,000",
    term: "Up to 3 years",
    rates: "Rates from 9%",
    turnAround: "As quick as 24 hours",
  },
  {
    id: 5,
    title: "Business cards",
    desc: "Streamline purchases, empower staff with cards and have full control of when and how they spend.",
    img: blFeatureImg5,
    limits: "$5,000 to $1,000,000",
    term: "Up to 3 years",
    rates: "Rates from 9%",
    turnAround: "As quick as 24 hours",
  },
  {
    id: 6,
    title: "Business cards",
    desc: "Streamline purchases, empower staff with cards and have full control of when and how they spend.",
    img: blFeatureImg6,
    limits: "$5,000 to $1,000,000",
    term: "Up to 3 years",
    rates: "Rates from 9%",
    turnAround: "As quick as 24 hours",
  },
  {
    id: 7,
    title: "Business cards",
    desc: "Streamline purchases, empower staff with cards and have full control of when and how they spend.",
    img: blFeatureImg7,
    limits: "$5,000 to $1,000,000",
    term: "Up to 3 years",
    rates: "Rates from 9%",
    turnAround: "As quick as 24 hours",
  },
  {
    id: 8,
    title: "Business cards",
    desc: "Streamline purchases, empower staff with cards and have full control of when and how they spend.",
    img: blFeatureImg8,
    limits: "$5,000 to $1,000,000",
    term: "Up to 3 years",
    rates: "Rates from 9%",
    turnAround: "As quick as 24 hours",
  },
]