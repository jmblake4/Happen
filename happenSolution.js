var library = (function() {
	return {
		TimeStamp: (function(){
			return {
				UnixTimestamp: function(){
					var dte = new Date();
					return (Math.floor(dte.getTime() / 1000).toString());
				},
				UnixMillisecond: function(){
					var dte =  new Date();
					return (dte.getTime().toString());
				}
			}
		})(),
		Local: (function(){
			return {
				Time: (function() {
					return {
						WithSeconds: function(){
							var dte = new Date();
							var minutes, hour, seconds, str_ampm;
							if (dte.getMinutes() < 10) minutes = '0' + dte.getMinutes().toString();
							else minutes = dte.getMinutes().toString();
							if (dte.getHours() > 12) hour = (dte.getHours() - 12).toString();
							else hour = dte.getHours().toString();
							if (dte.getHours() > 11) str_ampm = 'PM';
							else str_ampm = 'AM';
							if (dte.getSeconds() < 10) seconds = '0' + dte.getSeconds().toString();
							else seconds = dte.getSeconds().toString();
							return hour + ':' + minutes + ':' + seconds + ' ' + str_ampm;
						},
						WithOutSeconds: function() {
							var dte = new Date();
							var minutes, hour, str_ampm;
							if (dte.getMinutes() < 10) minutes = '0' + dte.getMinutes().toString();
							else minutes = dte.getMinutes().toString();
							if (dte.getHours() > 12) hour = (dte.getHours() - 12).toString();
							else hour = dte.getHours().toString();
							if (dte.getHours() > 11) str_ampm = 'PM';
							else str_ampm = 'AM';
							return hour + ':' + minutes + ' ' + str_ampm;							
						}
					}
				})(),
				MDY: (function(){
					return {
						Numeral: function(){
							var dte = new Date();
							var month = (dte.getMonth()+1).toString();
							var day = dte.getDate().toString();
							var year = dte.getFullYear().toString();
							return month + '/' + day + '/' + year;
						},
						Name: function(){
							var dte = new Date();
							var month_num = dte.getMonth();
							var day = dte.getDate().toString();
							var year = dte.getFullYear().toString();
							var month;
							switch (month_num) {
								case 0:
									month = 'January';
									break;
								case 1:
									month = 'February';
									break;
								case 2:
									month = 'March';
									break;
								case 3:
									month = 'April';
									break;
								case 4:
									month = 'May';
									break;
								case 5:
									month = 'June';
									break;
								case 6:
									month = 'July';
									break;
								case 7:
									month = 'August';
									break;
								case 8:
									month = 'September';
									break;
								case 9:
									month = 'October';
									break;
								case 10:
									month = 'November';
									break;
								case 11:
									month = 'December';
									break;									
							}
							return month + ' ' + day + ', ' + year;
						}
					}
				})(),
			}
		})(),
		Second: (function(){
			return{
				Second: function(){
					var dte = new Date();
					return dte.getSeconds().toString();					
				},
				DblDigit: function(){
					var dte = new Date();
					if (dte.getSeconds() < 10) return ('0' + dte.getSeconds().toString());
					else return dte.getSeconds().toString();					
				}
			}
		})(),
		Minute: (function(){
			return{
				Minute: function(){
					var dte = new Date();
					return dte.getMinutes().toString();
				},
				DblDigit: function(){
					var dte = new Date();
					if (dte.getMinutes() < 10) return ('0' + dte.getMinutes().toString());
					else return dte.getMinutes().toString();
				}
			}
		})(),
		Hour: (function(){
			return {
				TwentyFourHour: function() {
					var dte = new Date();
					return dte.getHours().toString();
				},
				TwelveHour: function() {
					var dte = new Date();
					if (dte.getHours() > 12) return ((dte.getHours()-12).toString());
					else return dte.getHours().toString();
				},
				AMPM: (function() {
					return {
						UpperCase: function(){
							var dte = new Date();
							if (dte.getHours() > 11) return 'PM';
							else return 'AM';
						},
						LowerCase: function(){
							var dte = new Date();
							if (dte.getHours() > 11) return 'pm';
							else return 'am';
						}
					}
				})()
			}
		})(),
		Week: (function(){
			return {
				DayOfWeek: function(){
					var dte = new Date();
					switch(dte.getDay()) {
						case 0: return 'Sunday';
						case 1: return 'Monday';
						case 2: return 'Tuesday';
						case 3: return 'Wednesday';
						case 4: return 'Thursday';
						case 5: return 'Friday';
						case 6: return 'Saturday';
					}
				},
				AbrDayOfWeek: function(){
					var dte = new Date();
					switch(dte.getDay()) {
						case 0: return 'Sun';
						case 1: return 'Mon';
						case 2: return 'Tue';
						case 3: return 'Wed';
						case 4: return 'Thu';
						case 5: return 'Fri';
						case 6: return 'Sat';
					}
				},
				FirstTwoOfWeek: function(){
					var dte = new Date();
					switch(dte.getDay()) {
						case 0: return 'Su';
						case 1: return 'Mo';
						case 2: return 'Tu';
						case 3: return 'We';
						case 4: return 'Th';
						case 5: return 'Fr';
						case 6: return 'Sa';
					}
				},
				WeekOfYear: function(){
					var dte = new Date();
					dte.setHours(0,0,0);
					dte.setDate(dte.getDate() + 4 - (dte.getDay()||7));
					var yearStart = new Date(dte.getFullYear(),0,1);
					return (Math.ceil(( ( (dte - yearStart) / 86400000) + 1)/7).toString());
				}
			}
		})(),
		Month: (function(){
			return {
				DateOfMonth: (function(){
					return {
						Numeral: function(){
							var dte = new Date();
							return dte.getDate().toString();
						},
						Ordinal: function(){
							var dte = new Date();
							var str_day = dte.getDate().toString();
							switch (str_day[str_day.length - 1]) {
								case '1': return (str_day + 'st');
								case '2': return (str_day + 'nd');
								case '3': return (str_day + 'rd');
								default: return (str_day + 'th');
							}
						},
						DateDblDigit: function(){
							var dte = new Date();
							if (dte.getDate() < 10) {
								return ('0' + dte.getDate().toString());
							} else {
								return dte.getDate().toString();
							}
						}
					}
				})(),
				MonthNumber: function(){
					var dte = new Date();
					return (dte.getMonth()+1).toString();
				},
				MonthNumberDblDigit: function(){
					var dte = new Date();
					if ((dte.getMonth()+1) < 10) {
						return ('0' + (dte.getMonth()+1).toString());
					} else {
						return ((dte.getMonth()+1).toString());
					}
				},
				AbrOfCurrentMonth: function(){
					var dte = new Date();
					switch(dte.getMonth()) {
						case 0: return 'Jan';
						case 1: return 'Feb';
						case 2: return 'Mar';
						case 3: return 'Apr';
						case 4: return 'May';
						case 5: return 'Jun';
						case 6: return 'Jul';
						case 7: return 'Aug';
						case 8: return 'Sep';
						case 9: return 'Oct';
						case 10: return 'Nov';
						case 11: return 'Dec';
					}
				},
				CurrentMonth: function(){
					var dte = new Date();
					switch(dte.getMonth()) {
						case 0: return 'January';
						case 1: return 'February';
						case 2: return 'March';
						case 3: return 'April';
						case 4: return 'May';
						case 5: return 'June';
						case 6: return 'July';
						case 7: return 'August';
						case 8: return 'September';
						case 9: return 'October';
						case 10: return 'November';
						case 11: return 'December';
					}
				}
			}
		})(),
		Year: (function(){
			return {
				DayOfYear: (function(){
					return {
						Numeral: function(){
							var dte = new Date();
							var bLeapYear = false;
							var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
							var month = dte.getMonth();
							var day = dte.getDate();
							var dayOfYear = dayCount[month] + day;

							var year = dte.getFullYear();
							var bLeapYear
							if ((year & 3) != 0) bLeapYear = false;
							else bLeapYear = ((year % 100) != 0 || (year % 400) == 0);

							if (month > 1 && bLeapYear) dayOfYear++;
							return dayOfYear.toString();
						},
						Ordinal: function(){
							var dte = new Date();
							var bLeapYear = false;
							var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
							var month = dte.getMonth();
							var day = dte.getDate();
							var dayOfYear = dayCount[month] + day;

							var year = dte.getFullYear();
							if ((year & 3) != 0) bLeapYear = false;
							else bLeapYear = ((year % 100) != 0 || (year % 400) == 0);

							if (month > 1 && bLeapYear) dayOfYear++;
							switch(dayOfYear.toString()[dayOfYear.toString().length-1]) {
								case '1': return dayOfYear.toString() + 'st';
								case '2': return dayOfYear.toString() + 'nd';
								case '3': return dayOfYear.toString() + 'rd';
								default: return dayOfYear.toString() + 'th';
							}
						}
					}
				})(),
				YearFull: function(){
					var dte = new Date();
					return dte.getFullYear().toString();
				},
				YearAbr: function(){
					var dte = new Date();
					return dte.getFullYear().toString().substr(2,2);					
				}
			}
		})(),
		Defaults: function(){
			var dte =  new Date();
			var year = dte.getFullYear().toString();
			var month, day, hour, minute, second;
			if (dte.getMonth()+1 < 10) month = '0' + (dte.getMonth()+1).toString();
			else month = (dte.getMonth()+1).toString();
			if (dte.getDate() < 10) day = '0' + dte.getDate().toString();
			else day = dte.getDate().toString();
			if (dte.getHours() < 10) hour = '0' + dte.getHours().toString();
			else hour = dte.getHours().toString();
			if (dte.getMinutes() < 10) minute = '0' + dte.getMinutes().toString();
			else minute = dte.getMinutes().toString();
			if (dte.getSeconds() < 10) second = '0' + dte.getSeconds().toString();
			else second = dte.getSeconds().toString();
			return (year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second)
		}
	}
})();