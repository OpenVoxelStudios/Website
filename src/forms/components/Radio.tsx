import { useState } from "react";

export default function Radio({ label, options, required }: { label: string, options: string[], required?: boolean }) {
    const [valid, setValid] = useState(true);
    const [value, setValue] = useState(true);

    return (
        <div className="glass FormRadio">
            <p className="formText">{label}{required ? <a style={{ color: 'red' }}> *</a> : ''}</p>
            <p className="formText" style={{ marginTop: "5px", color: 'red', fontSize: '20px', display: valid ? 'none' : 'block' }}>❗️ This is a mandatory question</p>

            {options.map((opt, index) =>
                <div key={`radio_${label.toLowerCase().replace(/ /g, '_')}__${index}`} className="glass radioInput">
                    <input onChange={() => setValid(true)} type="radio" id={`radio_${label.toLowerCase().replace(/ /g, '_')}__${index}`} name={`radio_${label.toLowerCase().replace(/ /g, '_')}`} value={opt} />
                    <label className="formText" htmlFor={`radio_${label.toLowerCase().replace(/ /g, '_')}__${index}`}>{opt}</label>
                </div>
            )}
        </div>
    );
}