import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutMinReise extends Schema.Component {
  collectionName: 'components_about_min_reises';
  info: {
    displayName: 'Min_reise';
    description: '';
  };
  attributes: {
    Heading_2: Attribute.String;
    Small_text: Attribute.String;
    min_reises: Attribute.Relation<
      'about.min-reise',
      'oneToMany',
      'api::min-reise.min-reise'
    >;
  };
}

export interface AboutSection1 extends Schema.Component {
  collectionName: 'components_about_section_1s';
  info: {
    displayName: 'Section_1';
    description: '';
  };
  attributes: {
    Heading_2: Attribute.String;
    Paragraf: Attribute.Text;
    jobbet_meds: Attribute.Relation<
      'about.section-1',
      'oneToMany',
      'api::jobbet-med.jobbet-med'
    >;
  };
}

export interface AboutSection2 extends Schema.Component {
  collectionName: 'components_about_section_2s';
  info: {
    displayName: 'Section_2';
  };
  attributes: {
    Heading_2: Attribute.String;
    Paragraf: Attribute.Text;
    Bilde: Attribute.Media;
  };
}

export interface AboutUtdanning extends Schema.Component {
  collectionName: 'components_about_utdannings';
  info: {
    displayName: 'Utdanning';
    description: '';
  };
  attributes: {
    Heading_2: Attribute.String;
    Small_text: Attribute.String;
    utdannings: Attribute.Relation<
      'about.utdanning',
      'oneToMany',
      'api::utdanning.utdanning'
    >;
  };
}

export interface HeroHeroHeader extends Schema.Component {
  collectionName: 'components_hero_hero_headers';
  info: {
    displayName: 'Hero_header';
    icon: 'bold';
    description: '';
  };
  attributes: {
    Hero_h1: Attribute.String;
    Hero_paragraf: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about.min-reise': AboutMinReise;
      'about.section-1': AboutSection1;
      'about.section-2': AboutSection2;
      'about.utdanning': AboutUtdanning;
      'hero.hero-header': HeroHeroHeader;
    }
  }
}
