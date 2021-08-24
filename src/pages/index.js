import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            ReactJs, React Native, NestJs, NextJs, Gatsby, NodeJs Development
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Out staff ReactJs devs for long term projects
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Web Development</p>
              <p className="mt-4">
                Create a powerful dashboard for your business to make a life for your sales or engineers easier. Make happy your customers with user-friendly interface of your portal.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Mobile Development</p>
              <p className="mt-4">
                Mobile app for all platforms for lead generation is the best option for you to create greetest product ever in the shortest way.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Chatbots / Livechats</p>
              <p className="mt-4">
                Do you want Automated Customer Support, be always in touch with your customers, make an appointment, booking, sales without any efforts? Build with us chatbot on Facebook Messager / Telegram / Discord / Slack and many other popular platforms for your bussiness
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Market Analysis</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    {/*<section id="stats" className="py-20 lg:pt-32">*/}
    {/*  <div className="container mx-auto text-center">*/}
    {/*    <LabelText className="text-gray-600">Our customers get results</LabelText>*/}
    {/*    <div className="flex flex-col sm:flex-row mt-8 lg:px-24">*/}
    {/*      <div className="w-full sm:w-1/3">*/}
    {/*        <StatsBox primaryText="+100%" secondaryText="Stats Information" />*/}
    {/*      </div>*/}
    {/*      <div className="w-full sm:w-1/3">*/}
    {/*        <StatsBox primaryText="+100%" secondaryText="Stats Information" />*/}
    {/*      </div>*/}
    {/*      <div className="w-full sm:w-1/3">*/}
    {/*        <StatsBox primaryText="+100%" secondaryText="Stats Information" />*/}
    {/*      </div>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</section>*/}
    {/*<section id="testimonials" className="py-20 lg:py-40">*/}
    {/*  <div className="container mx-auto">*/}
    {/*    <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>*/}
    {/*    <div className="flex flex-col md:flex-row md:-mx-3">*/}
    {/*      {customerData.map(customer => (*/}
    {/*        <div key={customer.customerName} className="flex-1 px-3">*/}
    {/*          <CustomerCard customer={customer} />*/}
    {/*        </div>*/}
    {/*      ))}*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</section>*/}
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Contact us sales@aleannlab.com
      </p>
    </section>
  </Layout>
);

export default Index;
