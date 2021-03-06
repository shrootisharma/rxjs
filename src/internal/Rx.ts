/* tslint:disable:no-unused-variable */
// Subject imported before Observable to bypass circular dependency issue since
// Subject extends Observable and Observable references Subject in it's
// definition
export {Subject, AnonymousSubject} from './Subject';
/* tslint:enable:no-unused-variable */
export {Observable} from './Observable';

export { config } from './config';

// statics
/* tslint:disable:no-use-before-declare */
import 'rxjs-compat/add/observable/bindCallback';
import 'rxjs-compat/add/observable/bindNodeCallback';
import 'rxjs-compat/add/observable/combineLatest';
import 'rxjs-compat/add/observable/concat';
import 'rxjs-compat/add/observable/defer';
import 'rxjs-compat/add/observable/empty';
import 'rxjs-compat/add/observable/forkJoin';
import 'rxjs-compat/add/observable/from';
import 'rxjs-compat/add/observable/fromEvent';
import 'rxjs-compat/add/observable/fromEventPattern';
import 'rxjs-compat/add/observable/fromPromise';
import 'rxjs-compat/add/observable/generate';
import 'rxjs-compat/add/observable/if';
import 'rxjs-compat/add/observable/interval';
import 'rxjs-compat/add/observable/merge';
import 'rxjs-compat/add/observable/race';
import 'rxjs-compat/add/observable/never';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/observable/onErrorResumeNext';
import 'rxjs-compat/add/observable/pairs';
import 'rxjs-compat/add/observable/range';
import 'rxjs-compat/add/observable/using';
import 'rxjs-compat/add/observable/throw';
import 'rxjs-compat/add/observable/timer';
import 'rxjs-compat/add/observable/zip';

//dom
import 'rxjs-compat/add/observable/dom/ajax';
import 'rxjs-compat/add/observable/dom/webSocket';

//internal/operators
import 'rxjs-compat/add/operator/buffer';
import 'rxjs-compat/add/operator/bufferCount';
import 'rxjs-compat/add/operator/bufferTime';
import 'rxjs-compat/add/operator/bufferToggle';
import 'rxjs-compat/add/operator/bufferWhen';
import 'rxjs-compat/add/operator/catch';
import 'rxjs-compat/add/operator/combineAll';
import 'rxjs-compat/add/operator/combineLatest';
import 'rxjs-compat/add/operator/concat';
import 'rxjs-compat/add/operator/concatAll';
import 'rxjs-compat/add/operator/concatMap';
import 'rxjs-compat/add/operator/concatMapTo';
import 'rxjs-compat/add/operator/count';
import 'rxjs-compat/add/operator/dematerialize';
import 'rxjs-compat/add/operator/debounce';
import 'rxjs-compat/add/operator/debounceTime';
import 'rxjs-compat/add/operator/defaultIfEmpty';
import 'rxjs-compat/add/operator/delay';
import 'rxjs-compat/add/operator/delayWhen';
import 'rxjs-compat/add/operator/distinct';
import 'rxjs-compat/add/operator/distinctUntilChanged';
import 'rxjs-compat/add/operator/distinctUntilKeyChanged';
import 'rxjs-compat/add/operator/do';
import 'rxjs-compat/add/operator/exhaust';
import 'rxjs-compat/add/operator/exhaustMap';
import 'rxjs-compat/add/operator/expand';
import 'rxjs-compat/add/operator/elementAt';
import 'rxjs-compat/add/operator/filter';
import 'rxjs-compat/add/operator/finally';
import 'rxjs-compat/add/operator/find';
import 'rxjs-compat/add/operator/findIndex';
import 'rxjs-compat/add/operator/first';
import 'rxjs-compat/add/operator/groupBy';
import 'rxjs-compat/add/operator/ignoreElements';
import 'rxjs-compat/add/operator/isEmpty';
import 'rxjs-compat/add/operator/audit';
import 'rxjs-compat/add/operator/auditTime';
import 'rxjs-compat/add/operator/last';
import 'rxjs-compat/add/operator/let';
import 'rxjs-compat/add/operator/every';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/mapTo';
import 'rxjs-compat/add/operator/materialize';
import 'rxjs-compat/add/operator/max';
import 'rxjs-compat/add/operator/merge';
import 'rxjs-compat/add/operator/mergeAll';
import 'rxjs-compat/add/operator/mergeMap';
import 'rxjs-compat/add/operator/mergeMapTo';
import 'rxjs-compat/add/operator/mergeScan';
import 'rxjs-compat/add/operator/min';
import 'rxjs-compat/add/operator/multicast';
import 'rxjs-compat/add/operator/observeOn';
import 'rxjs-compat/add/operator/onErrorResumeNext';
import 'rxjs-compat/add/operator/pairwise';
import 'rxjs-compat/add/operator/partition';
import 'rxjs-compat/add/operator/pluck';
import 'rxjs-compat/add/operator/publish';
import 'rxjs-compat/add/operator/publishBehavior';
import 'rxjs-compat/add/operator/publishReplay';
import 'rxjs-compat/add/operator/publishLast';
import 'rxjs-compat/add/operator/race';
import 'rxjs-compat/add/operator/reduce';
import 'rxjs-compat/add/operator/repeat';
import 'rxjs-compat/add/operator/repeatWhen';
import 'rxjs-compat/add/operator/retry';
import 'rxjs-compat/add/operator/retryWhen';
import 'rxjs-compat/add/operator/sample';
import 'rxjs-compat/add/operator/sampleTime';
import 'rxjs-compat/add/operator/scan';
import 'rxjs-compat/add/operator/sequenceEqual';
import 'rxjs-compat/add/operator/share';
import 'rxjs-compat/add/operator/shareReplay';
import 'rxjs-compat/add/operator/single';
import 'rxjs-compat/add/operator/skip';
import 'rxjs-compat/add/operator/skipLast';
import 'rxjs-compat/add/operator/skipUntil';
import 'rxjs-compat/add/operator/skipWhile';
import 'rxjs-compat/add/operator/startWith';
import 'rxjs-compat/add/operator/subscribeOn';
import 'rxjs-compat/add/operator/switch';
import 'rxjs-compat/add/operator/switchMap';
import 'rxjs-compat/add/operator/switchMapTo';
import 'rxjs-compat/add/operator/take';
import 'rxjs-compat/add/operator/takeLast';
import 'rxjs-compat/add/operator/takeUntil';
import 'rxjs-compat/add/operator/takeWhile';
import 'rxjs-compat/add/operator/throttle';
import 'rxjs-compat/add/operator/throttleTime';
import 'rxjs-compat/add/operator/timeInterval';
import 'rxjs-compat/add/operator/timeout';
import 'rxjs-compat/add/operator/timeoutWith';
import 'rxjs-compat/add/operator/timestamp';
import 'rxjs-compat/add/operator/toArray';
import 'rxjs-compat/add/operator/toPromise';
import 'rxjs-compat/add/operator/window';
import 'rxjs-compat/add/operator/windowCount';
import 'rxjs-compat/add/operator/windowTime';
import 'rxjs-compat/add/operator/windowToggle';
import 'rxjs-compat/add/operator/windowWhen';
import 'rxjs-compat/add/operator/withLatestFrom';
import 'rxjs-compat/add/operator/zip';
import 'rxjs-compat/add/operator/zipAll';

/* tslint:disable:no-unused-variable */
export {Operator} from './Operator';
export {Observer} from './types';
export {Subscription} from './Subscription';
export {Subscriber} from './Subscriber';
export {AsyncSubject} from './AsyncSubject';
export {ReplaySubject} from './ReplaySubject';
export {BehaviorSubject} from './BehaviorSubject';
export {ConnectableObservable} from './observable/ConnectableObservable';
export {Notification} from './Notification';
export {EmptyError} from './util/EmptyError';
export {ArgumentOutOfRangeError} from './util/ArgumentOutOfRangeError';
export {ObjectUnsubscribedError} from './util/ObjectUnsubscribedError';
export {TimeoutError} from './util/TimeoutError';
export {UnsubscriptionError} from './util/UnsubscriptionError';
export {TimeInterval} from './operators/timeInterval';
export {Timestamp} from './operators/timestamp';
export {TestScheduler} from './testing/TestScheduler';
export {VirtualTimeScheduler} from './scheduler/VirtualTimeScheduler';
export {AjaxRequest, AjaxResponse, AjaxError, AjaxTimeoutError} from './observable/dom/AjaxObservable';
export { pipe } from './util/pipe';

import { asap } from './scheduler/asap';
import { async } from './scheduler/async';
import { queue } from './scheduler/queue';
import { animationFrame } from './scheduler/animationFrame';
import { AsapScheduler } from './scheduler/AsapScheduler';
import { AsyncScheduler } from './scheduler/AsyncScheduler';
import { QueueScheduler } from './scheduler/QueueScheduler';
import { AnimationFrameScheduler } from './scheduler/AnimationFrameScheduler';
import { rxSubscriber } from './symbol/rxSubscriber';
import { iterator } from './symbol/iterator';
import { observable } from './symbol/observable';

import * as _operators from './operators/index';

export const operators = _operators;

/* tslint:enable:no-unused-variable */

/**
 * @typedef {Object} Rx.Scheduler
 * @property {Scheduler} queue Schedules on a queue in the current event frame
 * (trampoline scheduler). Use this for iteration operations.
 * @property {Scheduler} asap Schedules on the micro task queue, which uses the
 * fastest transport mechanism available, either Node.js' `process.nextTick()`
 * or Web Worker MessageChannel or setTimeout or others. Use this for
 * asynchronous conversions.
 * @property {Scheduler} async Schedules work with `setInterval`. Use this for
 * time-based operations.
 * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
 * Use this for synchronizing with the platform's painting
 */
let Scheduler = {
  asap,
  queue,
  animationFrame,
  async
};

/**
 * @typedef {Object} Rx.Symbol
 * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
 * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
 * an object that has all of the traits of an Rx Subscriber, including the
 * ability to add and remove subscriptions to the subscription chain and
 * guarantees involving event triggering (can't "next" after unsubscription,
 * etc).
 * @property {Symbol|string} observable A symbol to use as a property name to
 * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
 * @property {Symbol|string} iterator The ES6 symbol to use as a property name
 * to retrieve an iterator from an object.
 */
let Symbol = {
  rxSubscriber,
  observable,
  iterator
};

export {
    Scheduler,
    Symbol
};
