import { cityExpRoute } from '@/lib/city-exp-route';

const r = cityExpRoute('chauffeur-prive-saint-tropez');
export const dynamicParams = false;
export const generateStaticParams = r.generateStaticParams;
export const generateMetadata = r.generateMetadata;
export default r.Page;
