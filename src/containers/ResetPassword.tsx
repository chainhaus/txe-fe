import { useResetPasswordMutation } from '@app/store/services/auth';
import { Button, HTextField } from '@app/components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ResetPasswordPayload } from '@app/store/services/auth/type';
import { resetPasswordValidation } from '@app/validations';

export default function Signin() {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  const [forgotPassword, { isLoading }] = useResetPasswordMutation();
  const { handleSubmit, control } = useForm<ResetPasswordPayload>({
    resolver: resetPasswordValidation,
  });
  const onSubmit: SubmitHandler<ResetPasswordPayload> = (data) => {
    forgotPassword({ ...data, token: searchParams.get('token') || '' })
      .unwrap()
      .then(() => navigate('/'));
  };

  return (
    <div className="d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px">
      <div className="d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20">
        <form className="form w-100" id="kt_sign_in_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="text-center mb-11">
            <h1 className="text-dark fw-bolder mb-3">Reset password</h1>
            <div className="text-gray-500 fw-semibold fs-6">Please fill your new password</div>
          </div>
          <div className="fv-row mb-8">
            <HTextField control={control} type="password" placeholder="Password" name="password" />
          </div>
          <div className="fv-row mb-8">
            <HTextField
              control={control}
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
            />
          </div>
          <div className="d-grid mb-10">
            <Button variant="primary" type="submit" isLoading={isLoading} className="me-4">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="d-flex flex-stack">
        <div className="me-10">
          <button
            className="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-start"
            data-kt-menu-offset="0px, 0px"
          >
            <img
              data-kt-element="current-lang-flag"
              className="w-20px h-20px rounded me-3"
              src="assets/media/flags/united-states.svg"
              alt=""
            />
            <span data-kt-element="current-lang-name" className="me-1">
              English
            </span>
            <i className="ki-outline ki-down fs-5 text-muted rotate-180 m-0"></i>
          </button>
          <div
            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7"
            data-kt-menu="true"
            id="kt_auth_lang_menu"
          >
            <div className="menu-item px-3">
              <a href="#" className="menu-link d-flex px-5" data-kt-lang="English">
                <span className="symbol symbol-20px me-4">
                  <img
                    data-kt-element="lang-flag"
                    className="rounded-1"
                    src="assets/media/flags/united-states.svg"
                    alt=""
                  />
                </span>
                <span data-kt-element="lang-name">English</span>
              </a>
            </div>
            <div className="menu-item px-3">
              <a href="#" className="menu-link d-flex px-5" data-kt-lang="Spanish">
                <span className="symbol symbol-20px me-4">
                  <img
                    data-kt-element="lang-flag"
                    className="rounded-1"
                    src="assets/media/flags/spain.svg"
                    alt=""
                  />
                </span>
                <span data-kt-element="lang-name">Spanish</span>
              </a>
            </div>
            <div className="menu-item px-3">
              <a href="#" className="menu-link d-flex px-5" data-kt-lang="German">
                <span className="symbol symbol-20px me-4">
                  <img
                    data-kt-element="lang-flag"
                    className="rounded-1"
                    src="assets/media/flags/germany.svg"
                    alt=""
                  />
                </span>
                <span data-kt-element="lang-name">German</span>
              </a>
            </div>
            <div className="menu-item px-3">
              <a href="#" className="menu-link d-flex px-5" data-kt-lang="Japanese">
                <span className="symbol symbol-20px me-4">
                  <img
                    data-kt-element="lang-flag"
                    className="rounded-1"
                    src="assets/media/flags/japan.svg"
                    alt=""
                  />
                </span>
                <span data-kt-element="lang-name">Japanese</span>
              </a>
            </div>
            <div className="menu-item px-3">
              <a href="#" className="menu-link d-flex px-5" data-kt-lang="French">
                <span className="symbol symbol-20px me-4">
                  <img
                    data-kt-element="lang-flag"
                    className="rounded-1"
                    src="assets/media/flags/france.svg"
                    alt=""
                  />
                </span>
                <span data-kt-element="lang-name">French</span>
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex fw-semibold text-primary fs-base gap-5">
          <a href="../../demo44/dist/pages/team.html" target="_blank">
            Terms
          </a>
          <a href="../../demo44/dist/pages/pricing/column.html" target="_blank">
            Plans
          </a>
          <a href="../../demo44/dist/pages/contact.html" target="_blank">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
