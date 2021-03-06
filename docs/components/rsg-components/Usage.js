import React from 'react';
import PropTypes from 'prop-types';
import Props from 'rsg-components/Props';
import Methods from 'rsg-components/Methods';
import Events from 'rsg-components/Events';
import SlotsTable from 'rsg-components/SlotsTable';
import pickBy from 'lodash/pickBy';
export default function Usage(_ref) {
    var _ref$props = _ref.props,
        props = _ref$props.props,
        methods = _ref$props.methods,
        events = _ref$props.events,
        slots = _ref$props.slots;
    var slotsNode;
    slots = pickBy(slots, function(item) {
        return !!item.description;
    });

    if (slots && Object.keys(slots).length > 0) {
        slotsNode =
            slots &&
            React.createElement(SlotsTable, {
                props: slots,
            });
    }

    var propsNode =
        props &&
        React.createElement(Props, {
            props: props,
        });
    var eventsNode;

    if (events && Object.keys(events).length > 0) {
        eventsNode =
            events &&
            React.createElement(Events, {
                props: events,
            });
    }

    var methodsNode =
        methods &&
        methods.length > 0 &&
        React.createElement(Methods, {
            methods: methods,
        });

    if (!propsNode && !methodsNode && !slotsNode && !eventsNode) {
        return "This component has no inputs to display.";
    }

    return React.createElement('div', null, propsNode, methodsNode, eventsNode, slotsNode);
}
Usage.propTypes = {
    props: PropTypes.shape({
        props: PropTypes.array,
        methods: PropTypes.array,
        events: PropTypes.object,
        slots: PropTypes.object,
    }).isRequired,
};
