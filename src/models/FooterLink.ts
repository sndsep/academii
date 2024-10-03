import { ObjectId } from 'mongodb';

export interface FooterLink {
  _id: ObjectId;
  section: string;
  title: string;
  url: string;
}