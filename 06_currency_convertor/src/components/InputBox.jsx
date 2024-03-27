import { useId } from 'react';

function InputBox({
    label = '',
    className = '',
    amount = 0,
    selectCurrency = 'usd',
    currencyOptions = [],
    amountDisabled = false,
    currencyDisabled = false,
    onAmountChange,
    onCurrencyChange,
}) {
    const amountId = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1/2'>
                <label
                    className='text-black/40 mb-2 inline-block'
                    htmlFor={amountId}>
                    {label}
                </label>
                <input
                    className='outline-none w-full bg-transparent py-1.5'
                    type='number'
                    placeholder='Amount'
                    id={amountId}
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(Number(e.target.value))
                    }
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>Currency Type</p>
                <select
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                    disabled={currencyDisabled}
                    value={selectCurrency}
                    onChange={(e) => {
                        onCurrencyChange && onCurrencyChange(e.target.value);
                    }}>
                    {currencyOptions.map((currencyItem) => {
                        return <option
                            key={currencyItem}
                            value={currencyItem}>
                            {currencyItem}
                        </option>;
                    })}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
