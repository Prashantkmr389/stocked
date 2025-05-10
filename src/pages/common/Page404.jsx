// src/components/Page404.jsx
import { FlexBox } from  "../../components/reusables/AllContainers";
import { Text } from '../../components/reusables/AllTexts';
function Page404() {

  return (
    <FlexBox className={"text-center justify-center p-10 flex-col"}>
      <Text className={"font-bold text-3xl"}>
        404 error Not found ! We are building it
      </Text>
      <Text className={"font-bold text-3xl"}>
        This page is taking a break. Maybe check back later? Or never. Probably
        never.
      </Text>
    </FlexBox>
  );
}

export default Page404;
