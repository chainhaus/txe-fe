export type User = {
  bio?: string;
  business_identity_veriied: '0' | '1';
  business_images?: string | null;
  chat_token: string;
  created_at: string;
  creator_business_identity?: string | null;
  creator_type: '0' | '1';
  dob: string;
  email: string;
  facebook_url?: string;
  first_name?: string;
  gender: string;
  id: string;
  identity_document: string;
  identity_type: string;
  identity_verified: '0' | '1';
  instagram_url?: string;
  last_name: string;
  linkedin_url?: string;
  phone: string;
  profile_img?: string;
  role: '0' | '1' | '2';
  status: '0' | '1';
  twitter_url?: string;
  user_identity_document?: string;
  user_identity_verified: '0' | '1';
};
