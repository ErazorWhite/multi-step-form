import {FC, useCallback} from "react";
import {IAddon, IPlan} from "../../global/types.ts";

type Props = { plan?: IPlan, addons: IAddon[], isYearly: boolean, goTo: (i: number) => void };

export const Summary: FC<Props> = ({plan, addons, isYearly, goTo}) => {

    const calculateTotalPrice = useCallback(() => {
        if (!plan) return 0;
        const planPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
        const addonsPrice = addons.reduce((acc, addon) => (acc) += (isYearly ? addon.yearlyPrice : addon.monthlyPrice), 0)
        return planPrice + addonsPrice;
    }, [isYearly, plan, addons])

    const formatPrice = (price: number, currency: string) => `${currency}${price}/${isYearly ? 'yr' : 'mo'}`;

    return (
        <>
            <div>
                <div>
                    <div>
                        <p>{plan?.label} ({isYearly ? 'Yearly' : 'Monthly'})</p>
                        <button type="button" onClick={() => {
                            goTo(1)
                        }}>Change
                        </button>
                    </div>
                    <span>
                        {plan ? formatPrice(
                            isYearly ? plan?.yearlyPrice : plan?.monthlyPrice,
                            plan?.currency
                        ) : ''}
                    </span>
                </div>
                <ul>
                    {addons.map((addon) => (
                        <li key={addon.value}>
                            <p>{addon.label}</p>
                            <span>
                                +{formatPrice(
                                isYearly ? addon.yearlyPrice : addon.monthlyPrice,
                                addon.currency
                            )}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <p>Total (per {isYearly ? "year" : "month"})</p>
            <span>+{formatPrice(calculateTotalPrice(), '$')}</span>
        </>
    )
}
