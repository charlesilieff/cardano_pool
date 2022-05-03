import { ResourceLanguage } from 'i18next';

export interface Content extends ResourceLanguage {
  translation: {
    title: string;
    whoAreWe: string;
    whyJoinUs: string;
    poolDetails: string;
    s1: {
      p1: string;
      p2: string;
      p3: string;
      p4: string;
    };
    s2: {
      p1: string;
      p2: string;
      p3: string;
      p4: string;
      p5: string;
      p6: string;
      p7: string;
      p8: string;
      p9: string;
    };
    s3: {
      p1: string;
      p2: string;
      p3: string;
      p4: string;
      p5: string;
      p6: string;
      p7: string;
      p8: string;
      p9: string;
      p10:string;
      p11:string;
      p12:string;
      p13:string;

    };
    footer:{
      p1:string
    }
  };
}
