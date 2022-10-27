export default (param: string) => {
  const route = useRoute();
  const value = route.params[param];

  if (value == null) {
    throw createError({
      statusCode: 501,
      message:
        param +
        " not found on this route. Are you sure you spelled it correctly? " +
        "params for this route are " +
        JSON.stringify(route.params),
    });
  }

  return value;
};
