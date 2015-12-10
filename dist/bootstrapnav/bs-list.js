'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bsListItem = require('./bs-list-item');

var _bsListItem2 = _interopRequireDefault(_bsListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BSList = (function (_Component) {
    _inherits(BSList, _Component);

    function BSList() {
        _classCallCheck(this, BSList);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(BSList).apply(this, arguments));
    }

    _createClass(BSList, [{
        key: 'render',
        value: function render() {
            var props = this.props,
                listItems = props.links.map(function (link, n) {
                return _react2.default.createElement(_bsListItem2.default, { key: n, link: link, config: props.config });
            }),
                classes = props.rootNav ? 'nav navbar-nav' : 'dropdown-menu';
            return _react2.default.createElement(
                'ul',
                { className: classes },
                listItems
            );
        }
    }]);

    return BSList;
})(_react.Component);

exports.default = BSList;
;