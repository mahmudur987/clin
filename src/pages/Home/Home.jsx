import React from "react";
import Header from "../../components/Home/Header";
import Hero from "../../components/Home/Hero";
import About from "../../components/Home/About";
import OurSolutions from "../../components/Home/OurSolution";
import SolutionsInAction from "../../components/Home/SolutionInAction";
import OurTechnology from "../../components/Home/OurTechnology";
import Benefits from "../../components/Home/Benefits";
import CaseUse from "../../components/Home/CaseUse";
import GetStarted from "../../components/Home/GetStarted";
import Footer from "../../components/Home/Footer";

const HomePage = () => {
  return (
    <main>
      <div className="h-16">
        <Header />
      </div>

      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="our-solution">
        <OurSolutions />
      </section>
      <section id="in-action">
        <SolutionsInAction />
      </section>
      <section id="technology">
        <OurTechnology />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section className="case-use">
        <CaseUse />
      </section>
      <section>
        <GetStarted />
        <Footer />
      </section>
    </main>
  );
};

export default HomePage;
