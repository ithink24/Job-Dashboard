export const INPUTCONTROLS = [
    {
        label: 'Experience',
        inputs: [
            {
                name: 'min_experience',
                placeholder: 'Minimum',
                width: '245px'
            },
            {
                name: 'max_experience',
                placeholder: 'Maximum',
                width: '245px'
            },
        ],
    },
    {
        label: 'Salary',
        inputs: [
            {
                name: 'min_salary',
                placeholder: 'Minimum',
                width: '245px'
            },
            {
                name: 'max_salary',
                placeholder: 'Maximum',
                width: '245px'
            },
        ],
    },
    {
        label: 'Total employee',
        inputs: [
            { name: 'total_employee', placeholder: 'ex. 100', width: '500px' }
        ],
    },
    {
        label: 'Apply Type',
        radios: [
            { id: 'quick-radio', label: 'Quick apply', value: 'quick_apply', checked: true },
            { id: 'external-radio', label: 'External apply', value: 'external_apply', checked: true },
        ],
    },
]