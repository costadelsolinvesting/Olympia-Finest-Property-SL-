import React from 'react';
import { BuildingStorefrontIcon, KeyIcon, BanknotesIcon, GlobeAltIcon, PaintBrushIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

// FIX: Changed JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
export const ServiceIcons: { [key: string]: React.ReactElement } = {
  BuyerIcon: <BuildingStorefrontIcon className="h-8 w-8" />,
  SellerIcon: <KeyIcon className="h-8 w-8" />,
  InvestmentIcon: <BanknotesIcon className="h-8 w-8" />,
  RelocationIcon: <GlobeAltIcon className="h-8 w-8" />,
  TurnkeyIcon: <PaintBrushIcon className="h-8 w-8" />,
  DefaultIcon: <QuestionMarkCircleIcon className="h-8 w-8" />,
};
