/**
 * Created by claudio on 2019-09-23.
 */

import util from 'util';

@registerDynamicValueClass
class TestDefaultValueDynValue {
    static identifier = 'com.blockchainofthings.PawExtensions.TestDefaultValueDynValue';
    static title = 'Test Default Value';
    static inputs = [
        InputField('textField', 'Text', "String", {defaultValue: 'Text value', persisted: true}),
        InputField('checkboxField', 'Checkbox', "Checkbox", {defaultValue: true, persisted: true}),
        InputField('keyValueField', 'Key Value', "KeyValueList", {
            keyName: 'Key',
            valueName: 'Value',
            defaultValue: [
                ['key1', 'value1', true],
                ['key2', 'value2', true]
            ],
            persisted: true
        })
    ];

    evaluate(context) {
        return JSON.stringify(this);
    }

    title(context) {
        return 'Test Default Value';
    }

    text(context) {
        return '';
    }
}
