import { Component, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import {animate, style, transition, trigger, query, stagger, state} from '@angular/animations';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateY(20px)'}),
        animate('0.8s ease-out', style({opacity: 1, transform: 'translateY(0)'})),
      ]),
    ]),
    trigger('slideVertical', [
      state('closed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden',
        visibility: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: '1',
        visibility: 'visible'
      })),
      transition('closed <=> open', animate('300ms ease-in-out'))
    ]),
  ],
})
export class ResumeComponent {
  education = [
    {
      name: 'Yonsei',
      logoUrl: 'assets/universities/yonsei.png',
      url: 'https://www.yonsei.ac.kr/en_sc/index.jsp',
      program: 'Political Science & International Relations',
      achievement: 'BA',
      duration: '2013 - 2017',
      location: 'Seoul - South Korea',

    },
    {
      name: 'ITU',
      logoUrl: 'assets/universities/itu.png',
      url: 'https://en.itu.dk/',
      program: 'Digital Innovation and Management [Big Data]',
      achievement: 'MSc.IT',
      duration: '2018 - 2020',
      location: 'Copenhagen - Denmark'
    },
    {
      name: 'Hanyang',
      logoUrl: 'assets/universities/hanyang.png',
      url: 'https://www.hanyang.ac.kr/web/eng',
      program: 'Department of Computer Science and Engineering',
      achievement: 'Exchange',
      duration: '2019 - 2020',
      location: 'Seoul - South Korea'
    },
  ];

  experiences = [
    {
      company: 'Biot.ai / Washsense',
      logoUrl: 'assets/companies/washsense.png',
      companyUrl: 'https://www.washsense.com/post-acute/',
      role: 'Backend Developer',
      duration: '2021',
      location: 'Budapest - Hungary',
      summaryPoints: [
        'Led the overhaul of pharmaceutical data integration, incorporating international standards for interoperability. Designed a robust warning system to alert physicians about potential drug interactions based on patients\' comprehensive health profiles, and past prescriptions, thereby enhancing patient safety.',
        'Implemented recommendation and flagging systems to guide patients toward specialty check-ups derived from their diagnosis histories.',
        'Incorporated key healthcare standards like SNOMED, LOINC, and RXNorm. Succesfully navigated the first round of ONC Certification'
      ],
      skills: [
        {name:"Python", logoUrl: "assets/skills/python.png"},
        {name:"Django", logoUrl: "assets/skills/django.png"},
        {name:"Golang", logoUrl: "assets/skills/golang.png"},
        {name:"Docker", logoUrl: "assets/skills/docker.png"},
        {name:"FHIR", logoUrl: "assets/skills/fhir.png"},
        {name:"Microservices", logoUrl: "assets/skills/microservices.png"},
        {name:"MySQL", logoUrl: "assets/skills/mysql.png"},
      ],
      showSkills: false,
    },
    {
      company: 'Thoth Science Inc',
      logoUrl: 'assets/companies/thothscience_white.png',
      companyUrl: 'https://www.thothscience.com/en/about-us',
      role: 'IT Consultant',
      duration: '2020',
      location: 'Seoul - South Korea',
      summaryPoints: [
        'Used the Ingenuity Pathway Analysis tool to analyze data from animal studies. This helped us\n understand our potential drug\'s action against liver disease at the molecular level and ensured that\n our claims about its effectiveness were firmly grounded in evidence.',
        'Did due diligence on a medical device, particularly its claims about detecting COVID symptoms through Volatile Organic Compounds, before considering its import to South Korea.',
        'Built and maintained the website of the company.'
      ],
      skills: [
        {name:"Webdesign", logoUrl: "assets/skills/webdesign.png"},
        {name:"Ingenuity Pathway Analysis", logoUrl: "assets/skills/ipa.png"},
        {name:"Bioinformatics", logoUrl: "assets/skills/bioinformatics.png"},
        {name:"Drug Development", logoUrl: "assets/skills/drug-development.png"},
        {name:"Medical Hardware", logoUrl: "assets/skills/medical-hardware.png"},
      ],
      showSkills: false,
    },
    {
      company: 'Jabra / GN Stor Nord',
      logoUrl: 'assets/companies/jabra_black.png',
      companyUrl: 'https://www.emea.jabra.com/',
      role: 'Student Data Analyst',
      duration: '2018',
      location: 'Copenhagen - Denmark',
      summaryPoints: [
        'Utilized Python (specifically the pandas library) and advanced Excel features, like PowerQuery, for daily tasks, enabling the creation of comprehensive reports that aided our finance teams in making data-driven decisions.',
        'Worked on a major project to synchronize company-wide databases',
      ],
      skills: [
        {name:"Python", logoUrl: "assets/skills/python.png"},
        {name:"Pandas", logoUrl: "assets/skills/pandas.png"},
        {name:"Tableau", logoUrl: "assets/skills/tableau.png"},
        {name:"Qlik", logoUrl: "assets/skills/qlik.png"},
        {name:"PowerQuery", logoUrl: "assets/skills/power-query.png"},
        {name:"SQL", logoUrl: "assets/skills/sql.png"},
      ],
      showSkills: false,
    },
  ];

  toggleSkills(experience: any): void {
    experience.showSkills = !experience.showSkills;
  }

  getCardStyle(index: number): any {
    const lightness = 30 + (index / (this.experiences.length - 1)) * 50;
    return {
      'background-color': `hsl(210, 100%, ${lightness}%)`
    };
  }

}
