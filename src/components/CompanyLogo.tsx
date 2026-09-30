import microsoftLogo from '../assets/microsoft.svg';
import amazonLogo from '../assets/amazon.svg';
import gsngamesLogo from '../assets/gsngames.svg';
import zyngaLogo from '../assets/zynga.svg';
import { Company } from './ProjectModel';

import './CompanyLogo.css';

const companyLogos: Partial<Record<Company, string>> = {
  [Company.Microsoft]: microsoftLogo,
  [Company.Amazon]: amazonLogo,
  [Company.GSNGames]: gsngamesLogo,
  [Company.Zynga]: zyngaLogo,
};

type CompanyLogoProps = {
  company: Company;
};

export function CompanyLogo({ company }: CompanyLogoProps) {
  const logo = companyLogos[company];

  if (!logo) {
    return null;
  }

  return <img className="company-logo" src={logo} alt={`${company} logo`} />;
}
