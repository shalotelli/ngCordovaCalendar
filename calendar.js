// install  :     cordova plugin add https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin.git
// link     :     https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin

(function() {
  'use strict';

  angular.module('ngCordova.plugins.calendar', [])
    .factory('$cordovaCalendar', ['$q', '$window', function ($q, $window) {
      return {
        createCalendar: function(options) {
          var d = $q.defer(),
            createCalOptions = $window.plugins.calendar.getCreateCalendarOptions();

          if (typeof options === 'string') {
            createCalOptions.calendarName = options;
          } else {
            createCalOptions = angular.extend(createCalOptions, options);
          }

          $window.plugins.calendar.createCalendar(createCalOptions, function() {
            d.resolve();
          }, function() {
            d.reject();
          });

          return d.promise;
        },

        deleteCalendar: function(calendarName) {
          var d = $q.defer();

          $window.plugins.calendar.deleteCalendar(calendarName, function() {
            d.resolve();
          }, function() {
            d.reject();
          });

          return d.promise;
        },

        createEvent: function(options) {
          var d = $q.defer(),
            defaultOptions = {
              title: null,
              location: null,
              notes: null,
              startDate: null,
              endDate: null
            };

          defaultOptions = angular.extend(defaultOptions, options);

          $window.plugins.calendar.createEvent(
            defaultOptions.title,
            defaultOptions.location,
            defaultOptions.notes,
            defaultOptions.startDate,
            defaultOptions.endDate,
            function() {
              d.resolve();
            },
            function() {
              d.reject();
            }
          );

          return d.promise;
        },

        createEventWithOptions: function(options) {
          var d = $q.defer(),
            defaultOptionKeys = [],
            calOptions = window.plugins.calendar.getCalendarOptions(),
            defaultOptions = {
              title: null,
              location: null,
              notes: null,
              startDate: null,
              endDate: null
            };

          defaultOptionKeys = Object.keys(defaultOptions);

          for (var key in options) {
            if (defaultOptionKeys.indexOf(key) === -1) {
              calOptions[key] = options[key];
            } else {
              defaultOptions[key] = options[key];
            }
          }

          $window.plugins.calendar.createEventWithOptions(
            defaultOptions.title,
            defaultOptions.location,
            defaultOptions.notes,
            defaultOptions.startDate,
            defaultOptions.endDate,
            calOptions,
            function() {
              d.resolve();
            },
            function() {
              d.reject();
            }
          );

          return d.promise;
        },

        createEventInteractively: function(options) {
          var d = $q.defer(),
            defaultOptions = {
              title: null,
              location: null,
              notes: null,
              startDate: null,
              endDate: null
            };

          defaultOptions = angular.extend(defaultOptions, options);

          $window.plugins.calendar.createEventInteractively(
            defaultOptions.title,
            defaultOptions.location,
            defaultOptions.notes,
            defaultOptions.startDate,
            defaultOptions.endDate,
            function() {
              d.resolve();
            },
            function() {
              d.reject();
            }
          );

          return d.promise;
        },

        createEventInNamedCalendar: function() {
          var d = $q.defer(),
            defaultOptions = {
              title: null,
              location: null,
              notes: null,
              startDate: null,
              endDate: null,
              calendarName: null
            };

          defaultOptions = angular.extend(defaultOptions, options);

          $window.plugins.calendar.createEventInNamedCalendar(
            defaultOptions.title,
            defaultOptions.location,
            defaultOptions.notes,
            defaultOptions.startDate,
            defaultOptions.endDate,
            defaultOptions.calendarName,
            function() {
              d.resolve();
            },
            function() {
              d.reject();
            }
          );

          return d.promise;
        },

        findEvent: function(options) {
          var d = $q.defer(),
            defaultOptions = {
              title: null,
              location: null,
              notes: null,
              startDate: null,
              endDate: null
            };

          defaultOptions = angular.extend(defaultOptions, options);

          $window.plugins.calendar.findEvent(
            defaultOptions.title,
            defaultOptions.location,
            defaultOptions.notes,
            defaultOptions.startDate,
            defaultOptions.endDate,
            function() {
              d.resolve();
            },
            function() {
              d.reject();
            }
          );

          return d.promise;
        },

        listEventsInRange: function(startDate, endDate) {
          var d = $q.defer();

          $window.plugins.calendar.listEventsInRange(startDate, endDate, function() {
            d.resolve();
          }, function() {
            d.reject();
          });

          return d.promise;
        },

        listCalendars: function() {
          var d = $q.defer();

          $window.plugins.calendar.listCalendars(function(calendars) {
            d.resolve(calendars);
          }, function() {
            d.reject();
          });

          return d.promise;
        },

        findAllEventsInNamedCalendar: function(calendarName) {
          var d = $q.defer();

          $window.plugins.calendar.findAllEventsInNamedCalendar(calendarName, function() {
            d.resolve();
          }, function() {
            d.reject();
          });

          return d.promise;
        },

        modifyEvent: function(options) {
          var d = $q.defer(),
            defaultOptions = {
              title: null,
              location: null,
              notes: null,
              startDate: null,
              endDate: null,
              newTitle: null,
              newLocation: null,
              newNotes: null,
              newStartDate: null,
              newEndDate: null
            };

          defaultOptions = angular.extend(defaultOptions, options);

          $window.plugins.calendar.modifyEvent(
            defaultOptions.title,
            defaultOptions.location,
            defaultOptions.notes,
            defaultOptions.startDate,
            defaultOptions.endDate,
            defaultOptions.newTitle,
            defaultOptions.newLocation,
            defaultOptions.newNotes,
            defaultOptions.newStartDate,
            defaultOptions.newEndDate,
            function() {
              d.resolve();
            },
            function() {
              d.reject();
            }
          );

          return d.promise;
        },

        deleteEvent: function(options) {
          var d = $q.defer(),
            defaultOptions = {
              newTitle: null,
              location: null,
              notes: null,
              startDate: null,
              endDate: null
            };

          defaultOptions = angular.extend(defaultOptions, options);

          $window.plugins.calendar.deleteEvent(
            defaultOptions.newTitle,
            defaultOptions.location,
            defaultOptions.notes,
            defaultOptions.startDate,
            defaultOptions.endDate,
            function() {
              d.resolve();
            },
            function() {
              d.reject();
            }
          );

          return d.promise;
        }
      };
    }]);
})();
