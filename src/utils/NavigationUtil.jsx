import {
  CommonActions,
  StackActions,
  useNavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = useNavigationContainerRef();

export const navigate = (routeName, params) => {
  navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  }
};

export const resetAndNavigate = (routeName, params = {}) => {
  navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({index: 0, routes: [{name: routeName, params}]}),
    );
  }
};

export const goBack = () => {
  navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
};

export const popToTop = () => {
  navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
};

export const replace = (routeName, params) => {
  navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(routeName, params));
  }
};

export const pop = () => {
  navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop());
  }
};

export const push = routeName => {
  navigationRef.isReady();
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(routeName, params));
  }
};
