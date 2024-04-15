export default function Select({ label, options, required }: { label: string, options: string[], required?: boolean }) {
    return (
        <div className="glass FormSelect">
            <label className="formText" htmlFor={label.toLowerCase().replace(/ /g, '_')}>{label}{required ? <a style={{ color: 'red' }}> *</a> : ''}</label>
            <select className="glass formText" name={label} id={label.toLowerCase().replace(/ /g, '_')}>
                {options.map((opt, index) =>
                    <option value={opt} key={`select_${label.toLowerCase().replace(/ /g, '_')}__${index}`}>{opt}</option>
                )}
            </select>
        </div>
    );
}